import { Link } from "react-router";
import svgPaths from "../../imports/TodayHPremium/svg-uf5kg21m14";

export function PostPurchase() {
  const emptySeats = Array(5).fill(null);

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
        <Link to="/premium" className="absolute left-[24px] top-[59px] size-[24px] z-10">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </Link>

        {/* Background Decoration */}
        <div className="-translate-x-1/2 absolute left-1/2 top-[-39px] opacity-20">
          <svg width="563" height="634" viewBox="0 0 563 634" fill="none">
            <path clipRule="evenodd" d={svgPaths.p1d644df0} fill="url(#paint0_linear)" fillRule="evenodd" />
            <defs>
              <linearGradient id="paint0_linear" x1="281.5" y1="150" x2="281.496" y2="558" gradientUnits="userSpaceOnUse">
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
              <g filter="url(#filter0_d)">
                <path clipRule="evenodd" d={svgPaths.p2c3df200} fill="white" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p3f5b700} fill="url(#paint0_gradient)" fillRule="evenodd" />
              </g>
              <defs>
                <filter id="filter0_d" x="0" y="0" width="61.6" height="68" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <linearGradient id="paint0_gradient" x1="80.3766" y1="46.8406" x2="83.2248" y2="19.155" gradientUnits="userSpaceOnUse">
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
            You have 5 seats to share
          </h1>
          <p className="font-['DIN_OT:Regular',sans-serif] text-[18px] leading-[26px] text-[#bbb5ff]">
            Invite your family members to enjoy Elevate Premium together.
          </p>
        </div>

        {/* Seat Indicators */}
        <div className="absolute left-[24px] right-[24px] top-[540px] flex justify-center gap-[12px]">
          {emptySeats.map((_, index) => (
            <div
              key={index}
              className="size-[48px] rounded-full border-2 border-white/30 bg-white/10 flex items-center justify-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" opacity="0.4"/>
              </svg>
            </div>
          ))}
        </div>

        {/* Primary CTA */}
        <Link
          to="/invite"
          className="absolute bg-[#05c3f9] left-[24px] right-[24px] top-[640px] h-[56px] flex items-center justify-center rounded-[3px]"
        >
          <span className="font-['DIN_OT:Medium',sans-serif] text-[18px] text-[#f2fcfe]">
            Invite Your Family
          </span>
        </Link>

        {/* Secondary CTA */}
        <Link
          to="/premium"
          className="absolute left-[24px] right-[24px] top-[708px] h-[48px] flex items-center justify-center"
        >
          <span className="font-['DIN_OT:Regular',sans-serif] text-[16px] text-white/80">
            Do This Later
          </span>
        </Link>

        {/* Home Indicator */}
        <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 bg-white h-[5px] w-[134px] rounded-full" />
      </div>
    </div>
  );
}
