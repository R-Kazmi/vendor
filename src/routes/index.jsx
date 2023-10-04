import {
  HomeIcon,
  ShoppingBagIcon,
  TagIcon,
  TicketIcon,
  CreditCardIcon,
  Cog8ToothIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/outline";

export const userNavigation = [
  { name: "My profile", href: "/settings" },
  { name: "Account settings", href: "/settings" },
];

export const sideBarNavigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: HomeIcon,
  },
  { name: "Products", href: "/products", icon: TagIcon },
  { name: "Orders", href: "/orders", icon: ShoppingBagIcon },
  { name: "Discounts", href: "/discounts", icon: TicketIcon },
  { name: "Reports", href: "/reports", icon: ChatBubbleBottomCenterIcon },
  { name: "Payments", href: "/payments", icon: CreditCardIcon },
  { name: "Settings", href: "/settings", icon: Cog8ToothIcon },
];

export const settingsNavigation = [
  { name: "Store", href: "/settings" },
  { name: "Account", href: "/settings/accounts" },
];
