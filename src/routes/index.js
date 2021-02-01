import ChallengeContainer from "../pages/Challenge/container/challengeContainer";
import EventContainer from "../pages/Event/container/eventContainer";
import JarContainer from "../pages/Jars/container/jarContainer";
import PledgeContainer from "../pages/PledgeRibbon/containers/pledgeContainer";
import { PrivacyContainer, TermContainer } from "../pages/Privacy/container/privacyAndTermsContainer";
import RibbonContainer from "../pages/Ribbon/container/ribbonContainer";

export const RouteName = {
  routeHome: "",
  routeChallenge: "challenge",
  routeRibbon: "ribbon",
  routeJars: "jars",
  routeEvent: "event_details",
  routePrivacy: "privacy_policy",
  routeTerm: "terms_and_condition",
  routePledge:"pledge_a_ribbon"
};

export default {
  routes: {
    [RouteName.routeChallenge]: { component: ChallengeContainer },
    [RouteName.routeJars]: { component: JarContainer },
    [RouteName.routeRibbon]: { component: RibbonContainer },
    [RouteName.routeEvent]: { component: EventContainer },
    [RouteName.routePrivacy]: { component: PrivacyContainer },
    [RouteName.routeTerm]: { component: TermContainer },
    [RouteName.routePledge]:{component:PledgeContainer}
  },
  default: RouteName.routeLoginPage,
};
