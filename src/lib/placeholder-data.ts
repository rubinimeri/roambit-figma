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