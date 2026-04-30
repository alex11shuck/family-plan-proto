import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { PrototypeHome } from "./components/PrototypeHome";
import { Paywall } from "./components/Paywall";
import { PostPurchase } from "./components/PostPurchase";
import { InviteFlow } from "./components/InviteFlow";
import { SeatManagement } from "./components/SeatManagement";
import { RedemptionFlow } from "./components/RedemptionFlow";
import { PremiumTab } from "./components/PremiumTab";
import { PaywallOption2 } from "./components/option2/PaywallOption2";
import { PostPurchaseOption2 } from "./components/option2/PostPurchaseOption2";
import { PremiumTabOption2 } from "./components/option2/PremiumTabOption2";
import { PaywallOption3 } from "./components/option3/PaywallOption3";
import { PostPurchaseOption3 } from "./components/option3/PostPurchaseOption3";
import { PremiumTabOption3 } from "./components/option3/PremiumTabOption3";
import { AndroidEmail } from "./components/option3/AndroidEmail";
import { AndroidRedemption } from "./components/option3/AndroidRedemption";
import { AndroidPremium } from "./components/option3/AndroidPremium";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [
        {
          index: true,
          Component: PrototypeHome,
        },
        {
          path: "option1",
          Component: Paywall,
        },
        {
          path: "post-purchase",
          Component: PostPurchase,
        },
        {
          path: "invite",
          Component: InviteFlow,
        },
        {
          path: "seat-management",
          Component: SeatManagement,
        },
        {
          path: "redeem",
          Component: RedemptionFlow,
        },
        {
          path: "premium",
          Component: PremiumTab,
        },
        {
          path: "option2",
          Component: PaywallOption2,
        },
        {
          path: "option2/post-purchase",
          Component: PostPurchaseOption2,
        },
        {
          path: "option2/premium",
          Component: PremiumTabOption2,
        },
        {
          path: "option3",
          Component: PaywallOption3,
        },
        {
          path: "option3/post-purchase",
          Component: PostPurchaseOption3,
        },
        {
          path: "option3/premium",
          Component: PremiumTabOption3,
        },
        {
          path: "option3/android-email",
          Component: AndroidEmail,
        },
        {
          path: "option3/android-redemption",
          Component: AndroidRedemption,
        },
        {
          path: "option3/android-premium",
          Component: AndroidPremium,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL.replace(/\/$/, "") || "/",
  }
);
