import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, User, MapPin, Search } from 'lucide-react';

const Eligibility = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        zipCode: '',
        program: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleNext = (e) => {
        e.preventDefault();
        if (step === 1 && !formData.zipCode) return;
        if (step === 2 && !formData.program) return;

        if (step === 2) {
            // Simulate API verification call
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                setStep(3);
            }, 2000);
        } else {
            setStep(step + 1);
        }
    };

    const programs = [
        { id: 'medicaid', label: 'Medicaid' },
        { id: 'snap', label: 'Supplemental Nutrition Assistance Program (SNAP)' },
        { id: 'ssi', label: 'Supplemental Security Income (SSI)' },
        { id: 'veterans', label: 'Veterans Pension and Survivors Benefit' },
        { id: 'income', label: 'Income based (At or below 135% of Federal Poverty Guidelines)' },
        { id: 'none', label: 'None of the above' }
    ];

    return (
        <div className="min-h-screen py-20 relative flex items-center justify-center">
            <div className="bg-glow top-0 left-0 opacity-50"></div>

            <div className="container max-w-2xl relative z-10">
                <div className="text-center mb-10">
                    <h1 className="title-lg font-outfit text-white mb-4">
                        Check Your <span className="text-gradient">Eligibility</span>
                    </h1>
                    <p className="subtitle mx-auto">
                        Find out if you qualify for free premium cellular service in less than 2 minutes.
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="flex items-center justify-center mb-12">
                    {[1, 2, 3].map((i) => (
                        <React.Fragment key={i}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold font-outfit border-2 transition-colors ${step >= i
                                    ? 'bg-primary border-primary text-white'
                                    : 'border-glass-border text-text-muted glass'
                                }`}>
                                {step > i ? <CheckCircle2 size={20} /> : i}
                            </div>
                            {i < 3 && (
                                <div className={`w-16 md:w-24 h-1 mx-2 rounded-full transition-colors ${step > i ? 'bg-primary' : 'bg-glass-border'
                                    }`} />
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Wizard Card */}
                <div className="glass-card w-full animate-fade-in relative overflow-hidden min-h-[400px]">
                    {isLoading && (
                        <div className="absolute inset-0 bg-bg-darker/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center animate-fade-in">
                            <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4"></div>
                            <h3 className="font-outfit text-xl font-medium text-white">Verifying National Verifier Database...</h3>
                            <p className="text-text-muted mt-2">Connecting securely via API</p>
                        </div>
                    )}

                    <form onSubmit={handleNext} className="h-full flex flex-col h-full">
                        {step === 1 && (
                            <div className="flex-1 animate-fade-in">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-lg bg-primary/20 text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <h2 className="text-2xl font-outfit font-bold text-white">Where do you live?</h2>
                                </div>
                                <p className="text-text-muted mb-8 text-sm">
                                    We need your ZIP code to verify coverage and state-specific Lifeline benefits in your area.
                                </p>
                                <div className="mb-8">
                                    <label className="input-label" htmlFor="zip">ZIP Code</label>
                                    <input
                                        id="zip"
                                        type="text"
                                        placeholder="Enter 5-digit ZIP"
                                        className="input-base text-lg py-4"
                                        maxLength={5}
                                        value={formData.zipCode}
                                        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value.replace(/\D/g, '') })}
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="flex-1 animate-fade-in">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-lg bg-secondary/20 text-secondary">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <h2 className="text-2xl font-outfit font-bold text-white">Do you participate in any of these programs?</h2>
                                </div>
                                <p className="text-text-muted mb-6 text-sm">
                                    Select the program you currently participate in to fast-track your approval.
                                </p>
                                <div className="space-y-3 mb-8 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                                    {programs.map(prog => (
                                        <label
                                            key={prog.id}
                                            className={`block p-4 rounded-xl border cursor-pointer transition-all ${formData.program === prog.id
                                                    ? 'border-primary bg-primary/10 shadow-[0_0_15px_rgba(79,70,229,0.15)]'
                                                    : 'border-glass-border bg-black/20 hover:border-white/20 hover:bg-white/5'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${formData.program === prog.id ? 'border-primary bg-primary' : 'border-text-muted'
                                                    }`}>
                                                    {formData.program === prog.id && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                                </div>
                                                <span className={`text-sm ${formData.program === prog.id ? 'text-white font-medium' : 'text-text-muted'}`}>
                                                    {prog.label}
                                                </span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="flex-1 animate-fade-in text-center py-6">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-green-400 to-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                                    <CheckCircle2 size={48} className="text-white" />
                                </div>
                                <h2 className="text-3xl font-outfit font-bold text-white mb-4">Great News!</h2>
                                <p className="text-text-muted mb-8 text-lg max-w-md mx-auto">
                                    Based on your preliminary answers, you are eligible for the <strong>PacMac Unlimited Plan</strong> at $0/month.
                                </p>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 text-left max-w-sm mx-auto">
                                    <h4 className="font-outfit font-bold text-white mb-2 line-clamp-1">Next Steps:</h4>
                                    <ul className="text-sm text-text-muted space-y-2">
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Complete National Verifier app</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Verify your identity</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Choose your free 5G smartphone</li>
                                    </ul>
                                </div>
                                <button className="btn btn-primary w-full shadow-lg">
                                    Start Official Application <ArrowRight size={20} />
                                </button>
                            </div>
                        )}

                        {step < 3 && (
                            <div className="mt-auto pt-6 border-t border-glass-border flex justify-between items-center">
                                {step > 1 ? (
                                    <button
                                        type="button"
                                        className="text-text-muted hover:text-white transition-colors text-sm font-medium px-4 py-2"
                                        onClick={() => setStep(step - 1)}
                                    >
                                        Back
                                    </button>
                                ) : <div></div>}

                                <button
                                    type="submit"
                                    className={`btn btn-primary ${(step === 1 && !formData.zipCode) || (step === 2 && !formData.program)
                                            ? 'opacity-50 cursor-not-allowed'
                                            : ''
                                        }`}
                                    disabled={(step === 1 && !formData.zipCode) || (step === 2 && !formData.program)}
                                >
                                    {step === 1 ? 'Continue' : 'Verify Eligibility'} <ArrowRight size={18} />
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Eligibility;
