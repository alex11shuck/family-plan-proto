import { Link } from "react-router";
import { useState } from "react";
import svgPaths from "../../imports/TodayHPremium/svg-uf5kg21m14";

export function RedemptionFlow() {
  const [step, setStep] = useState<"landing" | "confirmed">("landing");
  const inviterName = "Alex";

  if (step === "confirmed") {
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

          {/* Background Decoration */}
          <div className="-translate-x-1/2 absolute left-1/2 top-[-39px] opacity-20">
            <svg width="563" height="634" viewBox="0 0 563 634" fill="none">
              <path clipRule="evenodd" d={svgPaths.p1d644df0} fill="url(#paint0_linear_confirmed)" fillRule="evenodd" />
              <defs>
                <linearGradient id="paint0_linear_confirmed" x1="281.5" y1="150" x2="281.496" y2="558" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#DEF7FD" />
                  <stop offset="1" stopColor="#DEF7FD" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Success Icon */}
          <div className="-translate-x-1/2 absolute left-1/2 overflow-clip size-[160px] top-[201px]">
            <div className="absolute inset-[30.33%_32.67%_29.67%_31.33%]">
              <svg width="62" height="68" viewBox="0 0 62 68" fill="none">
                <g filter="url(#filter0_d_confirmed)">
                  <path clipRule="evenodd" d={svgPaths.p2c3df200} fill="white" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3f5b700} fill="url(#paint0_gradient_confirmed)" fillRule="evenodd" />
                </g>
                <defs>
                  <filter id="filter0_d_confirmed" x="0" y="0" width="61.6" height="68" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                  </filter>
                  <linearGradient id="paint0_gradient_confirmed" x1="80.3766" y1="46.8406" x2="83.2248" y2="19.155" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#B872FF" />
                    <stop offset="1" stopColor="#05C3F9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="absolute left-[24px] right-[24px] top-[429px] text-center">
            <h1 className="font-['DIN_OT:Medium',sans-serif] text-[24px] leading-[32px] text-white mb-[8px]">
              Welcome to Premium!
            </h1>
            <p className="font-['DIN_OT:Regular',sans-serif] text-[18px] leading-[26px] text-[#bbb5ff]">
              You're now part of {inviterName}'s family plan. Elevate Premium is active on your account.
            </p>
          </div>

          {/* Continue Button */}
          <Link
            to="/premium"
            className="absolute bg-[#05c3f9] left-[24px] right-[24px] bottom-[32px] h-[56px] flex items-center justify-center rounded-[3px]"
          >
            <span className="font-['DIN_OT:Medium',sans-serif] text-[18px] text-[#f2fcfe]">
              Continue
            </span>
          </Link>

          {/* Home Indicator */}
          <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 bg-white h-[5px] w-[134px] rounded-full" />
        </div>
      </div>
    );
  }

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

        {/* Invitation Card */}
        <div className="absolute left-[24px] right-[24px] top-[120px] bottom-[140px] overflow-y-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-[16px] p-[24px] border border-white/20">
            {/* Avatar */}
            <div className="size-[80px] rounded-full bg-gradient-to-br from-[#05c3f9] to-[#B872FF] flex items-center justify-center mx-auto mb-[20px]">
              <span className="font-['DIN_OT:Medium',sans-serif] text-[32px] text-white">
                {inviterName[0]}
              </span>
            </div>

            {/* Message */}
            <h1 className="font-['DIN_OT:Medium',sans-serif] text-[24px] leading-[32px] text-white text-center mb-[12px]">
              {inviterName} invited you to Elevate Premium
            </h1>
            <p className="font-['DIN_OT:Regular',sans-serif] text-[16px] leading-[24px] text-[#bbb5ff] text-center mb-[24px]">
              Join their family plan and enjoy unlimited access to all premium features.
            </p>

            {/* Benefits */}
            <div className="bg-white/10 rounded-[12px] p-[16px] space-y-[12px]">
              {[
                "Unlimited premium games",
                "Daily crossword puzzles",
                "Advanced training features",
                "Ad-free experience"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-[12px]">
                  <div className="size-[20px] rounded-full bg-[#05c3f9] flex items-center justify-center shrink-0">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                      <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-white">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Account Notice */}
        <div className="absolute left-[24px] right-[24px] top-[560px]">
          <div className="bg-[#05c3f9]/20 border border-[#05c3f9]/40 rounded-[12px] p-[16px]">
            <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-white/90 text-center">
              By accepting, you'll need to sign in or create a free Elevate account
            </p>
          </div>
        </div>

        {/* Accept Button */}
        <button
          onClick={() => setStep("confirmed")}
          className="absolute bg-[#05c3f9] left-[24px] right-[24px] bottom-[90px] h-[56px] flex items-center justify-center rounded-[3px]"
        >
          <span className="font-['DIN_OT:Medium',sans-serif] text-[18px] text-[#f2fcfe]">
            Accept Invitation
          </span>
        </button>

        {/* Decline */}
        <button className="absolute left-[24px] right-[24px] bottom-[40px] h-[40px] flex items-center justify-center">
          <span className="font-['DIN_OT:Regular',sans-serif] text-[16px] text-white/60">
            Decline
          </span>
        </button>

        {/* Home Indicator */}
        <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 bg-white h-[5px] w-[134px] rounded-full" />
      </div>
    </div>
  );
}
