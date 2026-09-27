export const membershipData = {
  title: "Membership Plans",
  subtitle: "Invest in your career with full platform access to DSA, System Design, and AI courses.",
  durations: [
    { key: "2yr", label: "2 Years" },
    { key: "3yr", label: "3 Years" },
    { key: "4yr", label: "4 Years", badge: "Popular" }
  ],
  plans: [
    {
      id: "plus",
      name: "Strike Plus",
      tagline: "All existing Strike courses with access for your selected duration.",
      prices: {
        "2yr": { original: "₹14,999", current: "₹8,999", discount: "40% OFF" },
        "3yr": { original: "₹19,999", current: "₹11,999", discount: "40% OFF" },
        "4yr": { original: "₹19,999", current: "₹12,499", discount: "38% OFF" }
      },
      isUltra: false,
      ctaText: "Get Strike Plus",
      features: [
        "All current courses included",
        "HD recordings",
        "Live class access during plan",
        "Notes",
        "Resume Review",
        "Certificates",
        "System Design Platform",
        "DSA Platform",
        "Coder Arena Platform"
      ]
    },
    {
      id: "ultra",
      name: "Strike Ultra",
      tagline: "This plan includes all existing courses, plus upcoming courses for your selected duration.",
      prices: {
        "2yr": { original: "₹21,999", current: "₹12,999", discount: "40% OFF" },
        "3yr": { original: "₹24,999", current: "₹15,999", discount: "42% OFF" },
        "4yr": { original: "₹24,999", current: "₹13,499", discount: "46% OFF" }
      },
      isUltra: true,
      badgeText: "BEST VALUE",
      ctaText: "Get Strike Ultra",
      features: [
        "Everything in Strike Plus",
        "Upcoming batches included",
        "Coder Arena Platform",
        "Certificates",
        "Resume Review",
        "Notes",
        "System Design Platform",
        "DSA platform"
      ]
    }
  ]
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Courses", href: "#courses" },
  { name: "Practice", href: "#practice" },
  { name: "CodeArena", href: "#codearena" },
  { name: "Quiz", href: "#quiz" },
  { name: "System Design", href: "#system-design" },
  { name: "Contests", href: "#contests" }
];
