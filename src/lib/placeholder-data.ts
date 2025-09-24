export const sidebarData = [
  {
    title: "Reseller Area",
    links: [
      {
        title: "Dashboard",
        url: "/dashboard",
        iconUrl: "/dashboard/reseller-area/dashboard-icon.png"
      },
      {
        title: "Purchase eSIM",
        url: "/purchase-esim",
        iconUrl: "/dashboard/reseller-area/purchase-esim.png"
      },
      {
        title: "eSIM Orders",
        url: "/esim-orders",
        iconUrl: "/dashboard/esim-orders.png"
      },
      {
        title: "Transactions",
        url: "/transactions",
        iconUrl: "/dashboard/transactions.png"
      },
      {
        title: "My Profile",
        url: "/profile",
        iconUrl: "/dashboard/reseller-area/profile.png"
      }
    ]
  },
  {
    title: "Admin Area",
    links: [
      {
        title: "Admin Dashboard",
        url: "/admin-dashboard",
        iconUrl: "/dashboard/admin-area/admin-dashboard-icon.png"
      },
      {
        title: "Resellers",
        url: "/resellers",
        iconUrl: "/dashboard/admin-area/resellers.png"
      },
      {
        title: "eSIM Orders",
        url: "/esim-orders",
        iconUrl: "/dashboard/esim-orders.png"
      },
      {
        title: "Transactions",
        url: "/transactions",
        iconUrl: "/dashboard/transactions.png"
      },
      {
        title: "Mail Templates",
        url: "/mail-templates",
        iconUrl: "/dashboard/admin-area/mail-templates.png"
      },
      {
        title: "Settings",
        url: "/settings",
        iconUrl: "/dashboard/admin-area/settings.png"
      }
    ]
  }
]

export const chartData = Array.from({ length: 30 })
  .fill(null)
  .map((value, daysToSubtract) => {
    const today = new Date();
    const date = new Date(today.getTime() - daysToSubtract * 24 * 60 * 60 * 1000)
    return {
      date: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      count: Math.floor(Math.random() * 60 + 1)
    }
  }).reverse()

export const barChartData = [
  { month: "January", value: 186 },
  { month: "February", value: 305 },
  { month: "March", value: 237 },
  { month: "April", value: 73 },
  { month: "May", value: 209 },
  { month: "June", value: 214 },
  { month: "July", value: 178 },
  { month: "August", value: 270 },
]

export const pieChartData = [
  { category: "Category 1", value: 275, fill: "var(--color-categoryOne)" },
  { category: "Category 2", value: 200, fill: "var(--color-categoryTwo)" },
  { category: "Category 3", value: 187, fill: "var(--color-teal-500)" },
]