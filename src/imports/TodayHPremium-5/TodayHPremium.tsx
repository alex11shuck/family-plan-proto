import svgPaths from "./svg-hz10cdypuy";

function IconClose() {
  return (
    <div className="absolute inset-[12.5%_10.36%_10.36%_12.5%]" data-name="icon-close">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5137 18.5137">
        <g id="icon-close">
          <path d={svgPaths.p1abab880} fill="var(--fill-0, white)" id="Close" />
        </g>
      </svg>
    </div>
  );
}

function Close() {
  return (
    <button className="absolute content-stretch cursor-pointer flex items-start left-0 px-[24px] py-[12px] top-[44px]" data-name="Close">
      <div className="relative shrink-0 size-[24px]" data-name="Atom / Icons / Regular / Close">
        <IconClose />
      </div>
    </button>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[30.33%_32.67%_29.67%_31.33%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.5601 38.4">
        <g id="Group 190">
          <path clipRule="evenodd" d={svgPaths.p2ec79c80} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill 7" />
          <path clipRule="evenodd" d={svgPaths.p1ab4fa40} fill="url(#paint0_linear_1_2926)" fillRule="evenodd" id="Fill 9" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2926" x1="47.026" x2="48.7349" y1="27.5044" y2="10.893">
            <stop stopColor="#B872FF" />
            <stop offset="1" stopColor="#05C3F9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[30.33%_32.67%_29.67%_31.33%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3298 15.922">
        <g id="Group 190">
          <path clipRule="evenodd" d={svgPaths.p69ab580} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill 7" />
          <path clipRule="evenodd" d={svgPaths.p3dd00500} fill="url(#paint0_linear_1_2908)" fillRule="evenodd" id="Fill 9" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2908" x1="8.45473" x2="6.69863" y1="10.6088" y2="1.5356">
            <stop stopColor="#B872FF" />
            <stop offset="1" stopColor="#05C3F9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full">
      <p className="font-['DIN_OT:Medium',sans-serif] leading-[26px] relative shrink-0 text-[18px] text-white w-full">Exclusive App Icon</p>
      <p className="font-['DIN_OT:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#bbb5ff] text-[16px] w-full">Get the Premium-only icon</p>
    </div>
  );
}

function HintButton() {
  return (
    <div className="relative rounded-[5px] shrink-0" data-name="hint button">
      <div className="content-stretch flex items-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <p className="font-['DIN_OT:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">TURN ON</p>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-end min-w-px relative">
      <Frame />
      <HintButton />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-end size-full">
        <div className="content-stretch flex gap-[24px] items-start justify-end p-[24px] relative size-full">
          <div className="relative shrink-0 size-[48px]" data-name="iOS icon - K">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
              <path d={svgPaths.p8c9100} fill="url(#paint0_linear_1_2954)" id="Rectangle 4662" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2954" x1="35.5862" x2="35.5862" y1="72.9458" y2="-1.99481e-06">
                  <stop stopColor="#00326B" />
                  <stop offset="1" stopColor="#7500D0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-[8.54%] overflow-clip" data-name="K">
              <Group2 />
              <div className="absolute inset-[0_4%]" data-name="Subtract">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.6205 39.8049">
                  <path clipRule="evenodd" d={svgPaths.p174a0100} fill="url(#paint0_linear_1_2872)" fillRule="evenodd" id="Subtract" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2872" x1="61.8372" x2="66.117" y1="46.7241" y2="14.1408">
                      <stop stopColor="#B872FF" />
                      <stop offset="1" stopColor="#05C3F9" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="List">
      <Frame1 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="List">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.12)] border-b border-solid inset-0 pointer-events-none" />
      <List1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 size-[48px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Frame 166">
          <g filter="url(#filter0_ii_1_2958)" id="Vector 323 (Stroke)">
            <path clipRule="evenodd" d={svgPaths.p30491a80} fill="url(#paint0_linear_1_2958)" fillRule="evenodd" />
          </g>
          <g filter="url(#filter1_ii_1_2958)" id="Vector 323 (Stroke)_2">
            <path clipRule="evenodd" d={svgPaths.p2b802000} fill="url(#paint1_linear_1_2958)" fillRule="evenodd" />
          </g>
          <g id="Group 10435">
            <path d={svgPaths.p7d25e00} fill="var(--fill-0, black)" id="Rectangle 4670" />
            <g filter="url(#filter2_i_1_2958)" id="Rectangle 4669">
              <path d={svgPaths.p21fc5170} fill="var(--fill-0, white)" />
            </g>
            <path d={svgPaths.p2bb0ae00} id="Vector" stroke="var(--stroke-0, #CCEBFD)" strokeLinecap="round" strokeWidth="2.44898" />
          </g>
          <circle cx="26.9184" cy="8.32654" fill="var(--fill-0, #242424)" id="Ellipse 50" r="1.22449" />
          <g filter="url(#filter3_ii_1_2958)" id="Vector 323 (Stroke)_3">
            <path clipRule="evenodd" d={svgPaths.p36246000} fill="url(#paint2_linear_1_2958)" fillRule="evenodd" />
          </g>
          <g id="Group 10448">
            <path d={svgPaths.p13604b80} fill="url(#paint3_linear_1_2958)" id="Stroke 2" />
            <g filter="url(#filter4_dii_1_2958)" id="Stroke 1">
              <path d={svgPaths.p2c084740} fill="url(#paint4_linear_1_2958)" />
            </g>
          </g>
          <circle cx="12.9592" cy="10.7755" fill="var(--fill-0, #242424)" id="Ellipse 49" r="1.22449" />
          <g filter="url(#filter5_ii_1_2958)" id="Vector 323 (Stroke)_4">
            <path clipRule="evenodd" d={svgPaths.p2a157800} fill="url(#paint5_linear_1_2958)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.42584" id="filter0_ii_1_2958" width="2.18508" x="24.4694" y="1.46938">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="0.891429" />
            <feGaussianBlur stdDeviation="0.445714" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
            <feBlend in2="shape" mode="overlay" result="effect1_innerShadow_1_2958" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="-1.22449" />
            <feGaussianBlur stdDeviation="0.489796" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
            <feBlend in2="effect1_innerShadow_1_2958" mode="overlay" result="effect2_innerShadow_1_2958" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.42584" id="filter1_ii_1_2958" width="2.18508" x="10.4912" y="3.67348">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="0.891429" />
            <feGaussianBlur stdDeviation="0.445714" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
            <feBlend in2="shape" mode="overlay" result="effect1_innerShadow_1_2958" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="-1.22449" />
            <feGaussianBlur stdDeviation="0.489796" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
            <feBlend in2="effect1_innerShadow_1_2958" mode="overlay" result="effect2_innerShadow_1_2958" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="39.4773" id="filter2_i_1_2958" width="35.9102" x="4.72268" y="3.35963">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-0.31622" dy="-0.948659" />
            <feGaussianBlur stdDeviation="0.31622" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_2958" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.42584" id="filter3_ii_1_2958" width="2.18508" x="25.449" y="1.46938">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="0.891429" />
            <feGaussianBlur stdDeviation="0.445714" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
            <feBlend in2="shape" mode="overlay" result="effect1_innerShadow_1_2958" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="-1.22449" />
            <feGaussianBlur stdDeviation="0.489796" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
            <feBlend in2="effect1_innerShadow_1_2958" mode="overlay" result="effect2_innerShadow_1_2958" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="27.9491" id="filter4_dii_1_2958" width="24.063" x="19.0231" y="0.740653">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-1" dy="1" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2958" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2958" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="1.38052" />
            <feGaussianBlur stdDeviation="0.69026" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
            <feBlend in2="shape" mode="overlay" result="effect2_innerShadow_1_2958" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="-2.07078" />
            <feGaussianBlur stdDeviation="3.4513" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
            <feBlend in2="effect2_innerShadow_1_2958" mode="overlay" result="effect3_innerShadow_1_2958" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.42584" id="filter5_ii_1_2958" width="2.18508" x="11.4898" y="3.67348">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="0.891429" />
            <feGaussianBlur stdDeviation="0.445714" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
            <feBlend in2="shape" mode="overlay" result="effect1_innerShadow_1_2958" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="-1.22449" />
            <feGaussianBlur stdDeviation="0.489796" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
            <feBlend in2="effect1_innerShadow_1_2958" mode="overlay" result="effect2_innerShadow_1_2958" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2958" x1="25.9259" x2="27.388" y1="8.636" y2="2.57734">
            <stop stopColor="#121212" />
            <stop offset="0.795" stopColor="#A6A6A6" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2958" x1="11.9477" x2="13.4098" y1="10.8401" y2="4.78144">
            <stop stopColor="#121212" />
            <stop offset="0.795" stopColor="#A6A6A6" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2958" x1="26.1776" x2="24.7154" y1="8.636" y2="2.57734">
            <stop stopColor="#8E8E8E" />
            <stop offset="1" stopColor="#AFAFAF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_2958" x1="32.6122" x2="33.3268" y1="27.2092" y2="24.5422">
            <stop stopColor="#0066FF" />
            <stop offset="1" stopColor="#8C23FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_2958" x1="28.3798" x2="26.3615" y1="25.3499" y2="2.16937">
            <stop stopColor="#C388FF" />
            <stop offset="1" stopColor="#00FFF0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_2958" x1="12.2184" x2="10.7562" y1="10.8401" y2="4.78144">
            <stop stopColor="#8E8E8E" />
            <stop offset="1" stopColor="#AFAFAF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full">
      <p className="font-['DIN_OT:Medium',sans-serif] leading-[26px] relative shrink-0 text-[18px] text-white w-full">Words of the Day</p>
      <p className="font-['DIN_OT:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#bbb5ff] text-[16px] w-full">Learn new vocabulary daily</p>
    </div>
  );
}

function HintButton1() {
  return (
    <div className="relative rounded-[5px] shrink-0" data-name="hint button">
      <div className="content-stretch flex items-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <p className="font-['DIN_OT:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">SET UP</p>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-end min-w-px relative">
      <Frame3 />
      <HintButton1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[24px] items-start p-[24px] relative size-full">
        <Frame15 />
        <Frame6 />
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="List">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.12)] border-b border-solid inset-0 pointer-events-none" />
      <Frame2 />
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[48px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Group 165">
          <g id="Rectangle 4647" />
          <path d={svgPaths.p339c7700} fill="var(--fill-0, #FFA200)" id="Polygon 6" />
          <path clipRule="evenodd" d={svgPaths.p34541280} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill 1" />
          <path d={svgPaths.p1acec000} fill="var(--fill-0, #FF653C)" id="Polygon 7" />
          <g id="Discounting">
            <path d={svgPaths.p3f386100} fill="var(--fill-0, #FFFFFE)" id="Fill 7 Copy" />
          </g>
          <path d={svgPaths.pcbadc00} fill="var(--fill-0, #F8477F)" id="Polygon 8" />
          <path clipRule="evenodd" d={svgPaths.p1c0e7e40} fill="var(--fill-0, white)" fillRule="evenodd" id="Imported Layers 2" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full">
      <p className="font-['DIN_OT:Medium',sans-serif] leading-[26px] relative shrink-0 text-[18px] text-white w-full">{`Workout Length `}</p>
      <p className="font-['DIN_OT:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#bbb5ff] text-[16px] w-full">Choose how many games to play</p>
    </div>
  );
}

function HintButton2() {
  return (
    <div className="relative rounded-[5px] shrink-0" data-name="hint button">
      <div className="content-stretch flex items-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <p className="font-['DIN_OT:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">5 GAMES</p>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-end min-w-px relative">
      <Frame8 />
      <HintButton2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[24px] items-start p-[24px] relative size-full">
        <Group />
        <Frame7 />
      </div>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="List">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.12)] border-b border-solid inset-0 pointer-events-none" />
      <Frame4 />
    </div>
  );
}

function IconWhMemory() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon wh / Memory">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g clipPath="url(#clip0_1_2892)" id="Icon wh / Memory">
          <g filter="url(#filter0_dii_1_2892)" id="Star 1">
            <path d={svgPaths.p16520000} fill="url(#paint0_linear_1_2892)" />
          </g>
          <g filter="url(#filter1_dii_1_2892)" id="Polygon 50">
            <path d={svgPaths.p2d3dc4a2} fill="url(#paint1_linear_1_2892)" />
          </g>
          <g filter="url(#filter2_diii_1_2892)" id="Polygon 50_2">
            <path d={svgPaths.p29ca8900} fill="url(#paint2_linear_1_2892)" />
          </g>
          <g filter="url(#filter3_dii_1_2892)" id="Ellipse 42">
            <path d={svgPaths.p823f100} fill="url(#paint3_linear_1_2892)" />
          </g>
          <g filter="url(#filter4_dii_1_2892)" id="Ellipse 44">
            <circle cx="42.3748" cy="25.875" fill="url(#paint4_linear_1_2892)" r="1.875" />
          </g>
          <g filter="url(#filter5_dii_1_2892)" id="Ellipse 43">
            <ellipse cx="5.24978" cy="20.7656" fill="url(#paint5_linear_1_2892)" rx="1.6875" ry="1.64062" />
          </g>
          <g id="Group 55">
            <g filter="url(#filter6_dii_1_2892)" id="Subtract">
              <path d={svgPaths.p85cfc80} fill="url(#paint6_linear_1_2892)" />
            </g>
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="18.853" id="filter0_dii_1_2892" width="17.728" x="26.5733" y="2.5735">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="0.1875" />
            <feGaussianBlur stdDeviation="0.1875" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2892" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2892" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="1.125" />
            <feGaussianBlur stdDeviation="0.5625" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
            <feBlend in2="shape" mode="overlay" result="effect2_innerShadow_1_2892" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="-0.75" />
            <feGaussianBlur stdDeviation="0.75" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
            <feBlend in2="effect2_innerShadow_1_2892" mode="normal" result="effect3_innerShadow_1_2892" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="15.5601" id="filter1_dii_1_2892" width="14.7816" x="3.39173" y="1.10977">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="0.1875" />
            <feGaussianBlur stdDeviation="0.1875" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2892" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2892" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="1.125" />
            <feGaussianBlur stdDeviation="0.5625" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
            <feBlend in2="shape" mode="overlay" result="effect2_innerShadow_1_2892" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="-0.75" />
            <feGaussianBlur stdDeviation="0.75" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
            <feBlend in2="effect2_innerShadow_1_2892" mode="normal" result="effect3_innerShadow_1_2892" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.7428" id="filter2_diii_1_2892" width="20.0264" x="12.2939" y="5.69968">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="0.170455" />
            <feGaussianBlur stdDeviation="0.170455" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2892" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2892" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="-3.825" />
            <feGaussianBlur stdDeviation="2.05057" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
            <feBlend in2="shape" mode="overlay" result="effect2_innerShadow_1_2892" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="0.639205" />
            <feGaussianBlur stdDeviation="0.279652" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
            <feBlend in2="effect2_innerShadow_1_2892" mode="overlay" result="effect3_innerShadow_1_2892" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="-0.75" />
            <feGaussianBlur stdDeviation="0.46875" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend in2="effect3_innerShadow_1_2892" mode="normal" result="effect4_innerShadow_1_2892" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.5" id="filter3_dii_1_2892" width="6.375" x="18.7498" y="0.93748">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="0.1875" />
            <feGaussianBlur stdDeviation="0.1875" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2892" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2892" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="1.125" />
            <feGaussianBlur stdDeviation="0.5625" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
            <feBlend in2="shape" mode="overlay" result="effect2_innerShadow_1_2892" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="-0.75" />
            <feGaussianBlur stdDeviation="0.75" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
            <feBlend in2="effect2_innerShadow_1_2892" mode="normal" result="effect3_innerShadow_1_2892" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.625" id="filter4_dii_1_2892" width="4.5" x="40.1248" y="23.25">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="0.1875" />
            <feGaussianBlur stdDeviation="0.1875" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2892" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2892" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="1.125" />
            <feGaussianBlur stdDeviation="0.5625" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
            <feBlend in2="shape" mode="overlay" result="effect2_innerShadow_1_2892" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="-0.75" />
            <feGaussianBlur stdDeviation="0.75" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
            <feBlend in2="effect2_innerShadow_1_2892" mode="normal" result="effect3_innerShadow_1_2892" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.15625" id="filter5_dii_1_2892" width="4.125" x="3.18728" y="18.375">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="0.1875" />
            <feGaussianBlur stdDeviation="0.1875" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2892" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2892" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="1.125" />
            <feGaussianBlur stdDeviation="0.5625" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
            <feBlend in2="shape" mode="overlay" result="effect2_innerShadow_1_2892" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="-0.75" />
            <feGaussianBlur stdDeviation="0.75" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
            <feBlend in2="effect2_innerShadow_1_2892" mode="normal" result="effect3_innerShadow_1_2892" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="25.299" id="filter6_dii_1_2892" width="31.2594" x="8.24861" y="23.25">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="0.1875" />
            <feGaussianBlur stdDeviation="0.1875" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2892" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2892" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="1.125" />
            <feGaussianBlur stdDeviation="0.5625" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
            <feBlend in2="shape" mode="overlay" result="effect2_innerShadow_1_2892" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="-0.75" />
            <feGaussianBlur stdDeviation="0.75" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
            <feBlend in2="effect2_innerShadow_1_2892" mode="normal" result="effect3_innerShadow_1_2892" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2892" x1="36.2304" x2="36.2304" y1="2.99998" y2="20.625">
            <stop stopColor="#49FFD3" />
            <stop offset="1" stopColor="#00BDE7" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2892" x1="6.7744" x2="12.3955" y1="2.60851" y2="15.1336">
            <stop stopColor="#49FFD3" />
            <stop offset="1" stopColor="#00BDE7" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2892" x1="18.3748" x2="20.3753" y1="8.53118" y2="28.8024">
            <stop stopColor="#FFD178" />
            <stop offset="1" stopColor="#CD8EFF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_2892" x1="22.1904" x2="22.1904" y1="1.68748" y2="7.31248">
            <stop stopColor="#96FFD9" />
            <stop offset="1" stopColor="#00FFFF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_2892" x1="42.5435" x2="42.5435" y1="24" y2="27.75">
            <stop stopColor="#96FFD9" />
            <stop offset="1" stopColor="#00FFFF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_2892" x1="5.40166" x2="5.40166" y1="19.125" y2="22.4062">
            <stop stopColor="#96FFD9" />
            <stop offset="1" stopColor="#00FFFF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_2892" x1="22.5054" x2="22.5054" y1="24" y2="47.424">
            <stop stopColor="#49FFD3" />
            <stop offset="1" stopColor="#00BDE7" />
          </linearGradient>
          <clipPath id="clip0_1_2892">
            <rect fill="white" height="48" width="48" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full">
      <p className="font-['DIN_OT:Medium',sans-serif] leading-[26px] relative shrink-0 text-[18px] text-white w-full">Featured Workout</p>
      <p className="font-['DIN_OT:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#bbb5ff] text-[16px] w-full">Set your favorite for easy access</p>
    </div>
  );
}

function HintButton3() {
  return (
    <div className="relative rounded-[5px] shrink-0" data-name="hint button">
      <div className="content-stretch flex items-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <p className="font-['DIN_OT:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">RECOMMENDED</p>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-end min-w-px relative">
      <Frame13 />
      <HintButton3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[24px] items-start p-[24px] relative size-full">
        <IconWhMemory />
        <Frame10 />
      </div>
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
      <Frame9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-[375px]">
      <List />
      <List2 />
      <List3 />
      <List4 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center py-[12px] relative shrink-0 w-full" data-name="Row - 6">
      <div className="relative shrink-0 size-[24px]" data-name="Others / icon_unlimited">
        <div className="absolute inset-[4.17%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path clipRule="evenodd" d={svgPaths.p252ad000} fill="var(--fill-0, white)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['DIN_OT:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[18px] text-white">
        <p className="leading-[26px]">Unlimited gameplay</p>
      </div>
    </div>
  );
}

function OthersIconCrosswords() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Others / icon_crosswords">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Others / icon_crosswords">
          <path d={svgPaths.p363c3500} id="Vector" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[24px] items-center py-[12px] relative shrink-0 w-full" data-name="Row - 3">
      <OthersIconCrosswords />
      <div className="flex flex-[1_0_0] flex-col font-['DIN_OT:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[18px] text-white">
        <p className="leading-[26px]">Daily Crossword</p>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[24px] items-center py-[12px] relative shrink-0 w-full" data-name="Row - 9">
      <div className="relative shrink-0 size-[24px]" data-name="Others / icon_block">
        <div className="absolute inset-[4.17%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path clipRule="evenodd" d={svgPaths.p19b69980} fill="var(--fill-0, white)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['DIN_OT:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[18px] text-white">
        <p className="leading-[26px]">No ads</p>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center py-[12px] relative shrink-0 w-full" data-name="Row - 7">
      <div className="relative shrink-0 size-[24px]" data-name="Others / icon_energy">
        <div className="absolute inset-[4.17%_16.67%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 22">
            <path clipRule="evenodd" d={svgPaths.p2b366900} fill="var(--fill-0, white)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['DIN_OT:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[18px] text-white">
        <p className="leading-[26px]">Memory training</p>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center py-[12px] relative shrink-0 w-full" data-name="Row - 8">
      <div className="relative shrink-0 size-[24px]" data-name="Others / icon_games">
        <div className="absolute inset-[10.42%_0]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0024 19">
            <g id="icon">
              <path d={svgPaths.p1f5e8480} fill="var(--fill-0, white)" />
              <path clipRule="evenodd" d={svgPaths.p2c1a7000} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3da27d00} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['DIN_OT:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[18px] text-white">
        <p className="leading-[26px]">40+ games</p>
      </div>
    </div>
  );
}

function Features1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Features">
      <Row1 />
      <Row />
      <Row4 />
      <Row2 />
      <Row3 />
    </div>
  );
}

function Features() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Features">
      <Features1 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table">
      <Features />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center px-[36px] py-[24px] relative rounded-[6px] shrink-0 w-[327px]">
      <div aria-hidden="true" className="absolute border border-[#786bff] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['DIN_OT:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">PREMIUM FEATURES</p>
      <Table />
    </div>
  );
}

function Frame12() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[32px] items-center left-1/2 top-[244px]">
      <Frame11 />
      <Frame14 />
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute contents left-[326.33px] top-[18.33px]" data-name="Battery">
      <div className="absolute border border-solid border-white h-[11.333px] left-[326.33px] opacity-35 rounded-[2.667px] top-[18.33px] w-[22px]" data-name="Border" />
      <div className="absolute h-[4px] left-[349.33px] top-[22px] w-[1.328px]" data-name="Cap">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.32804 4">
          <path d={svgPaths.p32d253c0} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute bg-white h-[7.333px] left-[328.33px] rounded-[1.333px] top-[20.33px] w-[18px]" data-name="Capacity" />
    </div>
  );
}

function MoleculeHeaderStatusBar() {
  return (
    <div className="absolute backdrop-blur-[25px] h-[44px] left-0 right-0 top-0" data-name="Molecule / Header / Status bar">
      <Battery />
      <div className="absolute h-[11.59px] left-[306px] top-[18.26px] w-[15.333px]" data-name="Wifi">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.333 11.5899">
          <path d={svgPaths.p2c767600} fill="var(--fill-0, white)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute h-[11.238px] left-[284px] top-[18.61px] w-[17px]" data-name="Cellular Connection">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11.2383">
          <path d={svgPaths.p3dfaa480} fill="var(--fill-0, white)" id="Cellular Connection" />
        </svg>
      </div>
      <div className="absolute h-[21px] left-[21px] top-[7.33px] w-[54px]" data-name="Time Style">
        <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] left-[27px] not-italic text-[15px] text-center text-white top-[calc(50%-3.5px)] tracking-[-0.3px] w-[54px]">9:41</p>
      </div>
    </div>
  );
}

export default function TodayHPremium() {
  return (
    <div className="bg-gradient-to-b from-[#7500d0] overflow-clip relative rounded-[40px] size-full to-[#301f95]" data-name="Today H - Premium">
      <div className="-translate-x-1/2 absolute h-[380px] left-[calc(50%+2px)] top-[-58px] w-[337px]" data-name="Union">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337 380">
          <g id="Union" opacity="0.2">
            <path clipRule="evenodd" d={svgPaths.p2a118c70} fill="url(#paint0_linear_1_2906)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2cfb5c00} fill="url(#paint1_linear_1_2906)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p215dd680} fill="url(#paint2_linear_1_2906)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3e401d00} fill="url(#paint3_linear_1_2906)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p14ddfd80} fill="url(#paint4_linear_1_2906)" fillRule="evenodd" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2906" x1="168.286" x2="168.498" y1="133.027" y2="380">
              <stop stopColor="#DEF7FD" />
              <stop offset="1" stopColor="#DEF7FD" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2906" x1="168.286" x2="168.498" y1="133.027" y2="380">
              <stop stopColor="#DEF7FD" />
              <stop offset="1" stopColor="#DEF7FD" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2906" x1="168.286" x2="168.498" y1="133.027" y2="380">
              <stop stopColor="#DEF7FD" />
              <stop offset="1" stopColor="#DEF7FD" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_2906" x1="168.286" x2="168.498" y1="133.027" y2="380">
              <stop stopColor="#DEF7FD" />
              <stop offset="1" stopColor="#DEF7FD" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_2906" x1="168.286" x2="168.498" y1="133.027" y2="380">
              <stop stopColor="#DEF7FD" />
              <stop offset="1" stopColor="#DEF7FD" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="-translate-x-1/2 absolute font-['DIN_OT:Medium',sans-serif] leading-[32px] left-[187.5px] not-italic text-[24px] text-center text-white top-[196px] w-[327px]">Premium Benefits</p>
      <Close />
      <div className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] overflow-clip size-[96px] top-[84px]" data-name="K">
        <Group1 />
        <div className="absolute inset-[0_4%]" data-name="Subtract">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88.32 96">
            <path clipRule="evenodd" d={svgPaths.p1b84be00} fill="url(#paint0_linear_1_2973)" fillRule="evenodd" id="Subtract" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2973" x1="149.137" x2="159.459" y1="112.688" y2="34.1042">
                <stop stopColor="#B872FF" />
                <stop offset="1" stopColor="#05C3F9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame12 />
      <div className="absolute bottom-0 h-[24px] left-0 right-0" data-name="Component /  Bars / System / Home Indicator">
        <div className="-translate-x-1/2 absolute bg-white bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
      </div>
      <MoleculeHeaderStatusBar />
    </div>
  );
}