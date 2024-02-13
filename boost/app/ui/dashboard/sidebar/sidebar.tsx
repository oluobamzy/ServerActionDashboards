import Menulink from "./menulink/menulink";
import styles from "./sidebar.module.css";
import { MdDashboard, MdShoppingBag, MdAttachMoney, MdDescription, MdInsertChart, MdOutlineSettings, MdSupervisedUserCircle, MdHelpCenter, MdLogout } from "react-icons/md";
import Image from "../../image";


const menuItems = [
  {
    title: "Pages",
    list: [
      { title: "Dashboard", // Add missing object key before "title" property
        path: "/dashboard",
        icon: <MdDashboard />
      },
      { title: "Users", // Add missing object key before "title" property
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />
      },
      { title: "Products", // Add missing object key before "title" property
        path: "/dashboard/products",
        icon: <MdShoppingBag />
      },
      { title: "Transactions", // Add missing object key before "title" property
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />
      }
    ]
    },
    {
      title : "Analytics",
      list : [
      { title: "Revenue", // Add missing object key before "title" property
        path: "/dashboard/revenue",
        icon: <MdInsertChart />
      },
      { title: "Report", // Add missing object key before "title" property
        path: "/dashboard/report",
        icon: <MdDescription />
      },
      { title: "Teams", // Add missing object key before "title" property
        path: "/dashboard/teams",
        icon: <MdSupervisedUserCircle />
      },
      ]
    },
    { 
      title : "User",
      list : [
      { title: "Settings", // Add missing object key before "title" property
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />
      },
      {
        title: "Help", 
        path: "/dashboard/help",
        icon: < MdHelpCenter/>// Add missing object key before "title" property
      },
      // { title: "Sign out", // Add missing object key before "title" property
      //   path: "/signout",
      //   icon: <MdLogout />
      // }
    ]
    }
];
interface Menulink{
  path: string;
  icon?: JSX.Element; // Make the icon prop optional
}

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src = {"/pngtree-user-vector-avatar-png-image_1541962.jpg"} alt={"user-image"} />
        <div className={styles.userDetails}>
          <span className={styles.userName}>John Doe</span>
          <span className={styles.userTitle}>Admin</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map(cat=>(<li key={cat.title}>
          <span className={styles.cat}>{cat.title}</span>
          {cat.list.map((item)=>(<Menulink item = {item} key= {item.title}/>))}
          </li>))}
      </ul>
      <button className={styles.signout}>
        <MdLogout />
        <span>Sign out</span>
      </button>
    </div>
  )
}
export default Sidebar