import { Link } from "react-router";
import svgPaths from "../../../imports/TodayHPremium/svg-uf5kg21m14";

export function PostPurchaseOption2() {
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
        <Link to="/option2/premium" className="absolute left-[24px] top-[59px] size-[24px] z-10">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </Link>

        {/* Background Decoration */}
        <div className="-translate-x-1/2 absolute left-1/2 top-[-39px] opacity-20">
          <svg width="563" height="634" viewBox="0 0 563 634" fill="none">
            <path clipRule="evenodd" d={svgPaths.p1d644df0} fill="url(#paint0_linear_post2)" fillRule="evenodd" />
            <defs>
              <linearGradient id="paint0_linear_post2" x1="281.5" y1="150" x2="281.496" y2="558" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DEF7FD" />
                <stop offset="1" stopColor="#DEF7FD" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Success Icon */}
        <div className="-translate-x-1/2 absolute left-1/2 overflow-clip size-[120px] top-[100px]">
          <div className="absolute inset-[30.33%_32.67%_29.67%_31.33%]">
            <svg width="62" height="68" viewBox="0 0 62 68" fill="none">
              <g filter="url(#filter0_d_post2)">
                <path clipRule="evenodd" d={svgPaths.p2c3df200} fill="white" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p3f5b700} fill="url(#paint0_gradient_post2)" fillRule="evenodd" />
              </g>
              <defs>
                <filter id="filter0_d_post2" x="0" y="0" width="61.6" height="68" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <linearGradient id="paint0_gradient_post2" x1="80.3766" y1="46.8406" x2="83.2248" y2="19.155" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B872FF" />
                  <stop offset="1" stopColor="#05C3F9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="absolute left-[24px] right-[24px] top-[250px] bottom-[140px] overflow-y-auto">
          <div className="text-center mb-[32px]">
            <h1 className="font-['DIN_OT:Medium',sans-serif] text-[24px] leading-[32px] text-white mb-[8px]">
              You bought the Family Plan!
            </h1>
            <p className="font-['DIN_OT:Regular',sans-serif] text-[16px] leading-[24px] text-[#bbb5ff]">
              One more step to share with your family
            </p>
          </div>

          {/* Step 1 */}
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
                  Make sure you have an Apple Family Group set up on your iPhone
                </p>
                <button className="h-[40px] px-[16px] bg-white/20 hover:bg-white/30 rounded-[8px] font-['DIN_OT:Medium',sans-serif] text-[14px] text-white">
                  Open iOS Settings → Family
                </button>
              </div>
            </div>
            <div className="bg-white/5 rounded-[12px] p-[12px] flex items-center gap-[12px]">
              <div className="flex-1">
                <svg width="100%" height="80" viewBox="0 0 280 80" fill="none">
                  <rect width="280" height="80" rx="8" fill="#1a1a1a" fillOpacity="0.3"/>
                  <text x="20" y="30" fill="white" fontSize="14" fontFamily="SF Pro Text">Settings</text>
                  <text x="20" y="55" fill="#05c3f9" fontSize="18" fontFamily="SF Pro Text" fontWeight="600">Family</text>
                  <path d="M250 35L260 45L250 55" stroke="white" strokeWidth="2" opacity="0.4"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-[16px] p-[20px] border border-white/20 mb-[24px]">
            <div className="flex items-start gap-[12px] mb-[16px]">
              <div className="size-[32px] rounded-full bg-[#05c3f9] flex items-center justify-center shrink-0">
                <span className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-white">2</span>
              </div>
              <div className="flex-1">
                <h3 className="font-['DIN_OT:Medium',sans-serif] text-[18px] text-white mb-[8px]">
                  Turn on sharing for Elevate
                </h3>
                <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#bbb5ff] mb-[12px]">
                  Enable subscription sharing in your Apple ID settings
                </p>
                <button className="h-[40px] px-[16px] bg-white/20 hover:bg-white/30 rounded-[8px] font-['DIN_OT:Medium',sans-serif] text-[14px] text-white">
                  Open Settings → Subscriptions
                </button>
              </div>
            </div>
            <div className="bg-white/5 rounded-[12px] p-[12px]">
              <svg width="100%" height="80" viewBox="0 0 280 80" fill="none">
                <rect width="280" height="80" rx="8" fill="#1a1a1a" fillOpacity="0.3"/>
                <text x="20" y="30" fill="white" fontSize="14" fontFamily="SF Pro Text">Elevate - Brain Training</text>
                <text x="20" y="55" fill="#999" fontSize="12" fontFamily="SF Pro Text">Share with Family</text>
                <circle cx="250" cy="42" r="12" fill="#05c3f9"/>
              </svg>
            </div>
          </div>

          {/* Info Note */}
          <div className="bg-[#05c3f9]/20 border border-[#05c3f9]/40 rounded-[12px] p-[16px] flex items-start gap-[12px]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-[2px]">
              <circle cx="10" cy="10" r="9" stroke="#05c3f9" strokeWidth="2"/>
              <path d="M10 6V10M10 14H10.01" stroke="#05c3f9" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] leading-[20px] text-white">
              It can take up to 1 hour for family members to get access after you enable sharing.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <Link
          to="/option2/premium"
          className="absolute bg-[#05c3f9] left-[24px] right-[24px] bottom-[90px] h-[56px] flex items-center justify-center rounded-[3px]"
        >
          <span className="font-['DIN_OT:Medium',sans-serif] text-[18px] text-[#f2fcfe]">
            Got It
          </span>
        </Link>

        {/* Secondary CTA */}
        <Link
          to="/option2/premium"
          className="absolute left-[24px] right-[24px] bottom-[40px] h-[40px] flex items-center justify-center"
        >
          <span className="font-['DIN_OT:Regular',sans-serif] text-[16px] text-white/80">
            I'll Do This Later
          </span>
        </Link>

        {/* Home Indicator */}
        <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 bg-white h-[5px] w-[134px] rounded-full" />
      </div>
    </div>
  );
}
