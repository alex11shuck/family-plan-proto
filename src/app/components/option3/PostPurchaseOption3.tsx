import { Link } from "react-router";
import { useState } from "react";
import svgPaths from "../../../imports/TodayHPremium/svg-uf5kg21m14";

export function PostPurchaseOption3() {
  const [showSupportForm, setShowSupportForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [androidMemberName, setAndroidMemberName] = useState("");
  const [androidMemberEmail, setAndroidMemberEmail] = useState("");

  const handleSubmitSupport = () => {
    setShowSupportForm(false);
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);
  };

  return (
    <div className="bg-gradient-to-b from-[#7500d0] to-[#301f95] overflow-clip relative size-full flex items-center justify-center">
      <div className="bg-gradient-to-b from-[#7500d0] to-[#301f95] overflow-clip relative rounded-[40px] w-[375px] h-[812px]">
        {/* Status Bar */}
        <div className="absolute h-[47px] left-0 top-0 w-full overflow-clip">
          <div className="absolute left-[21px] top-[14px]">
            <p className="font-['SF_Pro_Text:Semibold',sans-serif] text-[16px] text-white tracking-[-0.32px]">9:41</p>
          </div>
          <div className="absolute right-[21px] top-[19px] flex gap-[5px] items-center">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
              <rect width="18" height="12" rx="2" fill="white" opacity="0.4"/>
            </svg>
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
              <path d="M0 0H17V12H0V0Z" fill="white"/>
            </svg>
            <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
              <rect x="0.5" y="0.5" width="24" height="12" rx="2.5" stroke="white" opacity="0.35"/>
              <rect x="2" y="2" width="21" height="9" rx="1" fill="white"/>
              <path d="M26 5V8C26 8.55228 25.5523 9 25 9V4C25.5523 4 26 4.44772 26 5Z" fill="white" opacity="0.4"/>
            </svg>
          </div>
        </div>

        {/* Close Button */}
        <Link to="/option3/premium" className="absolute left-[24px] top-[59px] size-[24px] z-10">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </Link>

        {/* Background Decoration */}
        <div className="-translate-x-1/2 absolute left-1/2 top-[-39px] opacity-20">
          <svg width="563" height="634" viewBox="0 0 563 634" fill="none">
            <path clipRule="evenodd" d={svgPaths.p1d644df0} fill="url(#paint0_linear_post3)" fillRule="evenodd" />
            <defs>
              <linearGradient id="paint0_linear_post3" x1="281.5" y1="150" x2="281.496" y2="558" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DEF7FD" />
                <stop offset="1" stopColor="#DEF7FD" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Success Icon */}
        <div className="-translate-x-1/2 absolute left-1/2 overflow-clip size-[120px] top-[80px]">
          <div className="absolute inset-[30.33%_32.67%_29.67%_31.33%]">
            <svg width="62" height="68" viewBox="0 0 62 68" fill="none">
              <g filter="url(#filter0_d_post3)">
                <path clipRule="evenodd" d={svgPaths.p2c3df200} fill="white" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p3f5b700} fill="url(#paint0_gradient_post3)" fillRule="evenodd" />
              </g>
              <defs>
                <filter id="filter0_d_post3" x="0" y="0" width="61.6" height="68" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <linearGradient id="paint0_gradient_post3" x1="80.3766" y1="46.8406" x2="83.2248" y2="19.155" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B872FF" />
                  <stop offset="1" stopColor="#05C3F9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="absolute left-[24px] right-[24px] top-[220px] bottom-[140px] overflow-y-auto no-scrollbar">
          <div className="text-center mb-[24px]">
            <h1 className="font-['DIN_OT:Medium',sans-serif] text-[24px] leading-[32px] text-white mb-[8px]">
              You bought the Family Plan!
            </h1>
            <p className="font-['DIN_OT:Regular',sans-serif] text-[16px] leading-[24px] text-[#bbb5ff]">
              One more step to share with your family
            </p>
          </div>

          {/* Step 1 - iOS Setup */}
          <div className="bg-white/10 backdrop-blur-sm rounded-[16px] p-[20px] border border-white/20 mb-[16px]">
            <div className="flex items-start gap-[12px] mb-[16px]">
              <div className="size-[32px] rounded-full bg-[#05c3f9] flex items-center justify-center shrink-0">
                <span className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-white">1</span>
              </div>
              <div className="flex-1">
                <h3 className="font-['DIN_OT:Medium',sans-serif] text-[18px] text-white mb-[8px]">
                  Set up Apple Family Sharing
                </h3>
                <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#bbb5ff] mb-[12px]">
                  For iOS family members
                </p>
                <button className="h-[40px] px-[16px] bg-white/20 hover:bg-white/30 rounded-[8px] font-['DIN_OT:Medium',sans-serif] text-[14px] text-white">
                  Open iOS Settings → Family
                </button>
              </div>
            </div>
          </div>

          {/* Step 2 - Enable Sharing */}
          <div className="bg-white/10 backdrop-blur-sm rounded-[16px] p-[20px] border border-white/20 mb-[16px]">
            <div className="flex items-start gap-[12px] mb-[16px]">
              <div className="size-[32px] rounded-full bg-[#05c3f9] flex items-center justify-center shrink-0">
                <span className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-white">2</span>
              </div>
              <div className="flex-1">
                <h3 className="font-['DIN_OT:Medium',sans-serif] text-[18px] text-white mb-[8px]">
                  Turn on sharing for Elevate
                </h3>
                <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#bbb5ff] mb-[12px]">
                  Enable in Apple ID settings
                </p>
                <button className="h-[40px] px-[16px] bg-white/20 hover:bg-white/30 rounded-[8px] font-['DIN_OT:Medium',sans-serif] text-[14px] text-white">
                  Open Settings → Subscriptions
                </button>
              </div>
            </div>
          </div>

          {/* Step 3 - Android Members (NEW) */}
          <div className="bg-white/10 backdrop-blur-sm rounded-[16px] p-[20px] border border-white/20 mb-[24px]">
            <div className="flex items-start gap-[12px]">
              <div className="size-[32px] rounded-full bg-[#ff9500] flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3.33334 7.77778C3.33334 7.42725 3.47385 7.09116 3.72334 6.84444C3.97282 6.59773 4.31305 6.45833 4.66668 6.45833H15.3333C15.687 6.45833 16.0272 6.59773 16.2767 6.84444C16.5262 7.09116 16.6667 7.42725 16.6667 7.77778V16.2222C16.6667 16.5727 16.5262 16.9088 16.2767 17.1555C16.0272 17.4023 15.687 17.5417 15.3333 17.5417H4.66668C4.31305 17.5417 3.97282 17.4023 3.72334 17.1555C3.47385 16.9088 3.33334 16.5727 3.33334 16.2222V7.77778Z" stroke="white" strokeWidth="1.5"/>
                  <path d="M6.66666 6.45833V4.83333C6.66666 3.94928 7.01785 3.10143 7.64297 2.47631C8.26809 1.85119 9.11594 1.5 10 1.5C10.8841 1.5 11.7319 1.85119 12.357 2.47631C12.9822 3.10143 13.3333 3.94928 13.3333 4.83333V6.45833" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-['DIN_OT:Medium',sans-serif] text-[18px] text-white mb-[8px]">
                  Got family on Android?
                </h3>
                <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#bbb5ff] mb-[12px]">
                  We'll help you add them to your plan
                </p>
                <button
                  onClick={() => setShowSupportForm(true)}
                  className="h-[40px] px-[16px] bg-[#ff9500] hover:bg-[#e68600] rounded-[8px] font-['DIN_OT:Medium',sans-serif] text-[14px] text-white"
                >
                  Contact Support to Set Them Up
                </button>
              </div>
            </div>
          </div>

          {/* Info Note */}
          <div className="bg-[#05c3f9]/20 border border-[#05c3f9]/40 rounded-[12px] p-[16px] flex items-start gap-[12px]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-[2px]">
              <circle cx="10" cy="10" r="9" stroke="#05c3f9" strokeWidth="2"/>
              <path d="M10 6V10M10 14H10.01" stroke="#05c3f9" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] leading-[20px] text-white">
              It can take up to 1 hour for iOS family members to get access, and 1 business day for Android members.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <Link
          to="/option3/premium"
          className="absolute bg-[#05c3f9] left-[24px] right-[24px] bottom-[90px] h-[56px] flex items-center justify-center rounded-[3px]"
        >
          <span className="font-['DIN_OT:Medium',sans-serif] text-[18px] text-[#f2fcfe]">
            Got It
          </span>
        </Link>

        {/* Secondary CTA */}
        <Link
          to="/option3/premium"
          className="absolute left-[24px] right-[24px] bottom-[40px] h-[40px] flex items-center justify-center"
        >
          <span className="font-['DIN_OT:Regular',sans-serif] text-[16px] text-white/80">
            I'll Do This Later
          </span>
        </Link>

        {/* Home Indicator */}
        <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 bg-white h-[5px] w-[134px] rounded-full" />

        {/* Support Form Modal */}
        {showSupportForm && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center px-[24px] z-50">
            <div className="bg-gradient-to-b from-[#7500d0] to-[#301f95] rounded-[20px] p-[24px] w-full max-w-[327px] border-2 border-white/20">
              <h3 className="font-['DIN_OT:Medium',sans-serif] text-[20px] leading-[28px] text-white text-center mb-[12px]">
                Add Android Family Member
              </h3>
              <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] leading-[20px] text-[#bbb5ff] text-center mb-[24px]">
                We'll email them within 1 business day with setup instructions
              </p>

              <div className="space-y-[12px] mb-[24px]">
                <input
                  type="text"
                  value={androidMemberName}
                  onChange={(e) => setAndroidMemberName(e.target.value)}
                  placeholder="Family member's name"
                  className="w-full h-[48px] bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-[8px] px-[16px] font-['DIN_OT:Regular',sans-serif] text-[16px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#05c3f9]"
                />
                <input
                  type="email"
                  value={androidMemberEmail}
                  onChange={(e) => setAndroidMemberEmail(e.target.value)}
                  placeholder="Family member's email"
                  className="w-full h-[48px] bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-[8px] px-[16px] font-['DIN_OT:Regular',sans-serif] text-[16px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#05c3f9]"
                />
              </div>

              <div className="flex flex-col gap-[12px]">
                <button
                  onClick={handleSubmitSupport}
                  disabled={!androidMemberName || !androidMemberEmail}
                  className={`h-[48px] rounded-[8px] font-['DIN_OT:Demi',sans-serif] text-[16px] text-white ${
                    androidMemberName && androidMemberEmail ? "bg-[#05c3f9]" : "bg-white/20"
                  }`}
                >
                  Submit Request
                </button>
                <button
                  onClick={() => setShowSupportForm(false)}
                  className="h-[40px] font-['DIN_OT:Regular',sans-serif] text-[14px] text-white/80"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Confirmation Toast */}
        {showConfirmation && (
          <div className="absolute top-[100px] left-[24px] right-[24px] bg-[#05c3f9] rounded-[12px] p-[16px] shadow-lg z-50">
            <div className="flex items-start gap-[12px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
                <circle cx="12" cy="12" r="10" fill="white"/>
                <path d="M8 12L11 15L16 9" stroke="#05c3f9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <p className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-white mb-[4px]">
                  Request Submitted!
                </p>
                <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-white/90">
                  We'll email {androidMemberEmail} within 1 business day with instructions.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
