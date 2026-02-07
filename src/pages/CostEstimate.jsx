import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import EstimateHeader from '../components/EstimateHeader';
import OptionTile from '../components/OptionTile';
import FooterNav from '../components/FooterNav';
import ICONS from '../components/estimateIcons';
import { CALENDER_URL } from '../config/appCondfig';
import { Link } from 'react-router-dom';

const PROJECT_TYPE = {
    new_saas_mvp: 8,
    automation_tool: 5,
    crm_portal: 10,
    ghl_app: 9,
};

const FEATURES = {
    auth_roles: 4,
    payments: 6,
    dashboards: 5,
    scheduling: 4,
    messaging: 6,
    file_upload: 3,
    ai: 8,
    realtime_voice: 10,
    multi_tenant: 8,
    mobile_ui: 3,
};

const STAGE = {
    idea_only: 6,
    nocode_mvp: 4,
    backend_exists: 3,
    scaling_automation: 5,
};

const INTEGRATIONS = {
    '0': 0,
    '1_2': 4,
    '3_5': 8,
    '6_plus': 14,
};

const USER_VOLUME = {
    lt_100: 1,
    '100_1k': 3,
    '1k_10k': 6,
    gt_10k: 10,
};

const COMPLIANCE = {
    basic: 0,
    pii_audit: 6,
    industry: 10,
};

const TIMELINE = {
    '6_plus_mo': 0,
    '3_6_mo': 4,
    asap: 10,
};

const DESIGN = {
    basic_ui_kit: 2,
    design_system: 6,
    prototype_testing: 10,
};

const MIGRATION = {
    none: 0,
    csv_simple: 3,
    complex_multi: 8,
};

const PLATFORMS = {
    web: 0,
    ghl_embedded: 6,
    admin_client_portals: 4,
    public_api: 6,
};

function toTitle(str) {
    if (!str) return '';
    return String(str).replaceAll('_', ' ').split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
}

function computeEstimate(payload) {
    // --- 0) Normalize payload values ---
    const features = Array.isArray(payload.features)
        ? payload.features.filter(Boolean).filter(f => f !== 'none')
        : [];

    const platforms = Array.isArray(payload.platforms)
        ? payload.platforms.filter(Boolean).filter(p => p !== 'none')
        : [];

    // integrations_count might come as number, string, null
    const integrationsKey =
        payload.integrations_count === null || payload.integrations_count === undefined
            ? '0'
            : String(payload.integrations_count);

    // --- 1) Base points from selections ---
    let base = 0;
    base += PROJECT_TYPE[payload.project_type] || 0;
    base += features.reduce((s, f) => s + (FEATURES[f] || 0), 0);
    base += STAGE[payload.stage] || 0;
    base += INTEGRATIONS[integrationsKey] || 0;
    base += USER_VOLUME[payload.user_volume] || 0;
    base += COMPLIANCE[payload.compliance] || 0;
    base += DESIGN[payload.design_scope] || 0;
    base += MIGRATION[payload.migration] || 0;
    base += platforms.reduce((s, p) => s + (PLATFORMS[p] || 0), 0);

    // --- 2) Flags ---
    const has_ai = features.includes('ai');
    const has_voice = features.includes('realtime_voice');
    const is_multitenant = features.includes('multi_tenant');
    const is_ghl = platforms.includes('ghl_embedded');
    const scale_users = ['1k_10k', 'gt_10k'].includes(payload.user_volume);
    const needs_compliance = payload.compliance !== 'basic';

    // --- 3) Determine if user selected basically nothing ---
    const noFeatures = features.length === 0;
    const noPlatforms = platforms.length === 0;
    const noIntegrations = integrationsKey === '0' || integrationsKey === 'none';
    const isBasicSetup =
        noFeatures &&
        noPlatforms &&
        noIntegrations &&
        payload.compliance === 'basic' &&
        (payload.user_volume === 'lt_1k' || payload.user_volume === undefined);

    // --- 4) Fixed pricing tiers based on base complexity score ---
    let basePrice;
    if (base <= 18) basePrice = 900;
    else if (base <= 28) basePrice = 1200;
    else if (base <= 50) basePrice = 3000;
    else if (base <= 80) basePrice = 7500;
    else basePrice = 18000;

    // --- 5) Add fixed amounts for complex features ---
    let addOnPrice = 0;
    if (has_ai) addOnPrice += 2500;
    if (has_voice) addOnPrice += 3000;
    if (is_multitenant) addOnPrice += 2000;
    if (needs_compliance) addOnPrice += 1500;
    if (is_ghl) addOnPrice += 800;
    if (scale_users) addOnPrice += 1200;

    // --- 6) If user selected basically nothing, clamp pricing lower ---
    if (isBasicSetup) {
        basePrice = 800;
        addOnPrice = 0;
    }

    // --- 7) Timeline rush premium ---
    let rushMultiplier = 1.0;
    if (payload.timeline === 'asap') rushMultiplier = 1.25;
    else if (payload.timeline === '3_6_mo') rushMultiplier = 1.10;

    // --- 8) Calculate final cost ---
    const totalBasePrice = (basePrice + addOnPrice) * rushMultiplier;

    // --- 9) Cost range variance ---
    let variance = 0.20;
    if (base <= 28) variance = 0.20;
    else if (base > 80) variance = 0.25;

    const roundTo = totalBasePrice < 2000 ? 100 : 250;

    let cost_low = Math.ceil((totalBasePrice * (1 - variance)) / roundTo) * roundTo;
    let cost_high = Math.ceil((totalBasePrice * (1 + variance)) / roundTo) * roundTo;

    // Minimum floor + spread
    cost_low = Math.max(cost_low, 800);
    cost_high = Math.max(cost_high, cost_low + 400);

    // --- 10) Timeline estimate ---
    let weeks, sprints;
    const totalComplexity =
        base +
        (has_ai ? 15 : 0) +
        (has_voice ? 20 : 0) +
        (is_multitenant ? 12 : 0);

    if (totalComplexity <= 25) {
        weeks = 3;
        sprints = 2;
    } else if (totalComplexity <= 50) {
        weeks = 5;
        sprints = 3;
    } else if (totalComplexity <= 80) {
        weeks = 8;
        sprints = 4;
    } else {
        weeks = 12;
        sprints = 6;
    }

    if (payload.timeline === 'asap' && weeks > 4) {
        weeks = Math.max(4, Math.ceil(weeks * 0.7));
        sprints = Math.ceil(weeks / 2);
    }

    // --- 11) Tiering ---
    let tier, team;
    if (totalComplexity <= 30) {
        tier = 'A';
        team = '1 Full-stack, 0.2 PM';
    } else if (totalComplexity <= 60) {
        tier = 'B';
        team = '1 FE, 1 BE, 0.4 PM';
    } else if (totalComplexity <= 100) {
        tier = 'C';
        team = '1 FE, 2 BE, 1 PM, 0.5 QA';
    } else {
        tier = 'D';
        team = '1-2 FE, 3 BE, 1 PM, 1 QA, Solution Architect (pt)';
    }

    // --- 12) Stack suggestions ---
    let stack = ['React', 'Node (Nest.js)', 'Postgres', 'Redis', 'AWS (S3 + Cloud)'];
    if (has_ai) stack = stack.concat(['Python (FastAPI) AI microservice', 'LLM (OpenAI/Anthropic)']);
    if (has_voice) stack = stack.concat(['WebRTC/Retell', 'WebSockets']);
    if (is_ghl) stack = stack.concat(['GHL OAuth + API']);

    // --- 13) Phases ---
    const estimatedHours = Math.round(totalComplexity * 2.5);
    let p1 = 0.45, p2 = 0.35, p3 = 0.20;
    if (has_ai || has_voice) {
        p1 = 0.40;
        p2 = 0.40;
        p3 = 0.20;
    }

    const phase_1_core = Math.round(estimatedHours * p1);
    const phase_2_rules_integrations = Math.round(estimatedHours * p2);
    const phase_3_billing_hardening = Math.round(estimatedHours * p3);

    const rushFlag = payload.timeline === 'asap' && weeks > 8;

    return {
        base_score: base,
        complexity: Math.round(base * 10) / 10,
        tier,
        team,
        dev_hours: Math.round(estimatedHours * 0.85),
        total_hours: estimatedHours,
        sprints,
        weeks,
        cost_low,
        cost_high,
        stack,
        phases: {
            phase_1_core,
            phase_2_rules_integrations,
            phase_3_billing_hardening
        },
        notes: { rush: rushFlag }
    };
}

export default function CostEstimate() {
    const initial = {
        project_type: 'new_saas_mvp',
        features: [],
        stage: 'idea_only',
        integrations_count: '0',
        user_volume: 'lt_100',
        compliance: 'basic',
        timeline: '6_plus_mo',
        design_scope: 'basic_ui_kit',
        migration: 'none',
        platforms: ['web'],
    };

    const [payload, setPayload] = useState(initial);
    const [currentStep, setCurrentStep] = useState(0);
    const [result, setResult] = useState(null);

    const steps = [
        {
            id: 'project_type', title: 'What type of project is this?', type: 'single', options: [
                { value: 'new_saas_mvp', label: 'New SaaS / MVP' },
                { value: 'automation_tool', label: 'Automation / Internal' },
                { value: 'crm_portal', label: 'CRM / Portal' },
                { value: 'ghl_app', label: 'GoHighLevel App' },
            ]
        },
        { id: 'features', title: 'Which features are must-have?', type: 'multi', options: Object.keys(FEATURES).map(k => ({ value: k, label: toTitle(k), icon: ICONS[k] || ICONS.default })) },
        {
            id: 'stage', title: 'Current stage of the product?', type: 'single', options: [
                { value: 'idea_only', label: 'Idea only' },
                { value: 'nocode_mvp', label: 'No-code MVP' },
                { value: 'backend_exists', label: 'Backend exists' },
                { value: 'scaling_automation', label: 'Scaling / Automation' },
            ]
        },
        {
            id: 'integrations_count', title: 'How many integrations are needed?', type: 'single', options: [
                { value: '0', label: '0' },
                { value: '1_2', label: '1-2' },
                { value: '3_5', label: '3-5' },
                { value: '6_plus', label: '6+' },
            ]
        },
        {
            id: 'user_volume', title: 'Expected user volume at launch?', type: 'single', options: [
                { value: 'lt_100', label: '< 100' },
                { value: '100_1k', label: '100 - 1,000' },
                { value: '1k_10k', label: '1,000 - 10,000' },
                { value: 'gt_10k', label: '10,000+' },
            ]
        },
        {
            id: 'compliance', title: 'Security / Compliance needs?', type: 'single', options: [
                { value: 'basic', label: 'Basic' },
                { value: 'pii_audit', label: 'PII / audit' },
                { value: 'industry', label: 'Industry (HIPAA, FIN)' },
            ]
        },
        {
            id: 'timeline', title: 'Timeline urgency?', type: 'single', options: [
                { value: '6_plus_mo', label: '6+ months' },
                { value: '3_6_mo', label: '3 - 6 months' },
                { value: 'asap', label: 'ASAP (rush)' },
            ]
        },
        {
            id: 'design_scope', title: 'Design scope?', type: 'single', options: [
                { value: 'basic_ui_kit', label: 'Basic UI kit' },
                { value: 'design_system', label: 'Design system' },
                { value: 'prototype_testing', label: 'Prototype + testing' },
            ]
        },
        {
            id: 'migration', title: 'Data migration needs?', type: 'single', options: [
                { value: 'none', label: 'None' },
                { value: 'csv_simple', label: 'Simple CSV' },
                { value: 'complex_multi', label: 'Complex / multi-source' },
            ]
        },
        { id: 'platforms', title: 'Which platforms?', type: 'multi', options: Object.keys(PLATFORMS).map(k => ({ value: k, label: toTitle(k), icon: ICONS[k] || ICONS.default })) },
        { id: 'review', title: 'Review & submit', type: 'review' }
    ];

    const featuresList = Object.keys(FEATURES);
    const platformsList = Object.keys(PLATFORMS);

    const [pendingSelection, setPendingSelection] = useState(null);

    const toggleMulti = (key, field) => {
        setPayload((p) => {
            const set = new Set(p[field] || []);
            if (set.has(key)) set.delete(key);
            else set.add(key);
            return { ...p, [field]: Array.from(set) };
        });
    };

    const handleSelect = (field, value, { autoAdvance = false } = {}) => {
        setPendingSelection({ field, value });

        setTimeout(() => {
            setPayload(p => ({ ...p, [field]: value }));
            setPendingSelection(null);
            if (autoAdvance) setCurrentStep(s => Math.min(s + 1, steps.length - 1));
        }, 420);
    };

    const canProceed = (() => {
        const step = steps[currentStep];
        if (!step) return true;
        if (step.type === 'single') return Boolean(payload[step.id]);
        return true;
    })();

    const goNext = () => setCurrentStep(s => Math.min(s + 1, steps.length - 1));
    const goPrev = () => setCurrentStep(s => Math.max(s - 1, 0));

    const liveEstimate = useMemo(() => computeEstimate(payload), [payload]);

    const exportPDF = () => {
        const html = `
            <html><head><title>Estimate</title>
            <style>body{font-family:Arial,Helvetica,sans-serif;padding:20px;color:#111;background:white} h1{color:#222}</style>
            </head><body>
            <h1>Project Estimate</h1>
            <p><strong>Cost:</strong> ${liveEstimate.cost_low.toLocaleString()} - ${liveEstimate.cost_high.toLocaleString()}</p>
            <p><strong>Weeks:</strong> ${liveEstimate.weeks} • <strong>Sprints:</strong> ${liveEstimate.sprints}</p>
            <h2>Selections</h2>
            <pre>${JSON.stringify(payload, null, 2)}</pre>
            <h2>Stack suggestions</h2>
            <ul>${liveEstimate.stack.map(s => `<li>${s}</li>`).join('')}</ul>
            </body></html>`;
        const w = window.open('', '_blank');
        if (!w) return alert('Popup blocked — please allow popups to export the PDF.');
        w.document.write(html);
        w.document.close();
        w.focus();
        setTimeout(() => { w.print(); }, 500);
    };

    const reset = () => {
        setPayload(initial);
        setCurrentStep(0);
        setResult(null);
    };

    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <Helmet>
                <title>Cost Estimate — Build With Stack</title>
            </Helmet>

            <section className="section">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <EstimateHeader title="Instant Project Cost Estimator" subtitle="Get a fast, realistic budget range for your product — tailored to features, timeline and scale." />

                        <div className="glass-card p-4 md:p-8">
                            <div className="w-full bg-transparent">
                                <div className="w-full max-w-4xl rounded-2xl p-2 md:p-8 shadow-lg relative overflow-hidden">
                                    <div className="md:flex md:items-start md:gap-8">
                                        <div className="flex-1">
                                            <AnimatePresence initial={false} mode="wait">
                                                <motion.div
                                                    key={currentStep}
                                                    initial={{ opacity: 0, y: 20, scale: 0.995 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: -20, scale: 0.995 }}
                                                    transition={{ duration: 0.32 }}
                                                    className="min-h-[260px] flex flex-col items-center justify-center"
                                                >
                                                    <div className="w-full mb-4 text-left">
                                                        <h2 className="text-xl md:text-2xl font-semibold text-white">{steps[currentStep].title}</h2>
                                                        <p className="text-xs text-gray-400 mt-1">Step {currentStep + 1} of {steps.length}</p>
                                                    </div>

                                                    {steps[currentStep].type === 'single' && (
                                                        <div className="w-full">
                                                            <div className="flex flex-col gap-4">
                                                                {steps[currentStep].options.map((opt, idx) => {
                                                                    const isPending = pendingSelection && pendingSelection.field === steps[currentStep].id && pendingSelection.value === opt.value;
                                                                    const isSelected = payload[steps[currentStep].id] === opt.value;
                                                                    return (
                                                                        <OptionTile
                                                                            key={opt.value}
                                                                            opt={{ ...opt, icon: opt.icon || ICONS[opt.value] || ICONS.default }}
                                                                            isSelected={isSelected}
                                                                            isPending={isPending}
                                                                            onClick={() => handleSelect(steps[currentStep].id, opt.value)}
                                                                            variant="single"
                                                                        />
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {steps[currentStep].type === 'multi' && (
                                                        <div className="w-full">
                                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                                {steps[currentStep].options.map(opt => {
                                                                    const selected = (payload[steps[currentStep].id] || []).includes(opt.value);
                                                                    return (
                                                                        <OptionTile
                                                                            key={opt.value}
                                                                            opt={{ ...opt, icon: opt.icon || ICONS[opt.value] || ICONS.default }}
                                                                            isSelected={selected}
                                                                            onClick={() => toggleMulti(opt.value, steps[currentStep].id)}
                                                                            variant="multi"
                                                                        />
                                                                    );
                                                                })}
                                                            </div>
                                                            {/* Navigation is provided by the footer controls — keeping inline buttons removed for clarity */}
                                                        </div>
                                                    )}

                                                    {steps[currentStep].type === 'review' && (
                                                        <div className="w-full text-sm text-gray-300 space-y-4">
                                                            <div className="flex flex-col md:flex-row md:items-start md:gap-6">
                                                                <div className="flex-1">
                                                                    <div className="text-sm text-gray-400">Your selections</div>
                                                                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                                        {steps.filter(s => s.type !== 'review').map(s => (
                                                                            <div key={s.id} className="bg-black/20 p-3 rounded">
                                                                                <div className="text-xs text-gray-400">{s.title}</div>
                                                                                <div className="text-sm text-white mt-1">
                                                                                    {Array.isArray(payload[s.id]) ? (payload[s.id].length ? payload[s.id].map(v => toTitle(v)).join(', ') : <span className="text-gray-400">(none)</span>) : (payload[s.id] ? toTitle(String(payload[s.id])) : <span className="text-gray-400">(not set)</span>)}
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                                <div className="mt-6 md:mt-0 w-full md:w-64">
                                                                    <div className="bg-gradient-to-b from-[#0f0f0f] to-[#080808] border border-gray-800 rounded-lg p-4 text-sm text-gray-200">
                                                                        <div className="text-xs text-gray-400">Estimated range</div>
                                                                        <div className="text-2xl font-bold text-white mt-1">${liveEstimate.cost_low.toLocaleString()} — ${liveEstimate.cost_high.toLocaleString()}</div>
                                                                        <div className="text-xs text-gray-500 mt-2">{liveEstimate.weeks} weeks • {liveEstimate.sprints} sprints</div>
                                                                        <div className="mt-3 text-xs text-gray-400">Suggested team</div>
                                                                        <div className="text-sm font-medium text-white mt-1">{liveEstimate.team} • Tier {liveEstimate.tier}</div>
                                                                        <div className="mt-3 text-xs text-gray-400">Phases (hrs)</div>
                                                                        <ul className="mt-2 list-disc list-inside text-xs text-gray-300">
                                                                            <li>Phase 1 (core): {liveEstimate.phases.phase_1_core} hrs</li>
                                                                            <li>Phase 2 (integrations): {liveEstimate.phases.phase_2_rules_integrations} hrs</li>
                                                                            <li>Phase 3 (billing/hardening): {liveEstimate.phases.phase_3_billing_hardening} hrs</li>
                                                                        </ul>
                                                                        <div className="mt-3 text-xs text-gray-400">Stack highlights</div>
                                                                        <ul className="mt-2 list-disc list-inside text-xs text-gray-300">
                                                                            {liveEstimate.stack.map(s => <li key={s}>{s}</li>)}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap gap-3 mt-4">
                                                                <button onClick={exportPDF} className="px-4 py-2 bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white rounded">Export to PDF</button>
                                                                <Link target='blank' to={CALENDER_URL} className="px-4 py-2 bg-gray-800 text-gray-200 rounded">Book a call</Link>
                                                                <button onClick={reset} className="px-4 py-2 bg-transparent border border-gray-700 text-gray-300 rounded">Start over</button>
                                                                <button onClick={() => setCurrentStep(0)} className="px-4 py-2 bg-gray-800 text-gray-200 rounded">Back to edit</button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>
                                    </div>

                                    {steps[currentStep].type !== 'review' && (
                                        <FooterNav onBack={goPrev} onNext={() => { if (canProceed) goNext(); }} canProceed={canProceed} atStart={currentStep === 0} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}