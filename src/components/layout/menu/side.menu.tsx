import BriefcaseIcon from "@/components/svgs/brief.case.icon";
import HomeIcon from "@/components/svgs/home.icon";
import MailIcon from "@/components/svgs/mail.icon";
import UserIcon from "@/components/svgs/user.icon";
import Link from "next/link";
import ToggleTheme from "./toggle.theme";

export default function SideMenuComp() {
  return (
    <div className="border-r border-amber-800 md:block font-Dongle text-3xl">
      <div className="flex h-full flex-col gap-2">
        <div className="flex h-[60px] items-center border-b border-amber-800 px-6">
          <Link
            className="flex items-center gap-2 font-semibold text-purple-600 dark:text-purple-500"
            href="/"
          >
            <UserIcon className="h-6 w-6" />
            <span className="">MHLab</span>
          </Link>

          <div className="right-0 absolute c_pc:hidden mr-5">
            <ToggleTheme />
          </div>
        </div>

        <div className="flex-1 overflow-auto py-2">
          {/* <nav className="grid items-start px-4 text-sm font-medium"> */}
          <nav className="grid items-start px-4 text-2xl font-medium">
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-purple-500 transition-all hover:text-purple-900 dark:text-purple-500 dark:hover:text-purple-700"
              href="/"
            >
              <HomeIcon className="h-4 w-4" />
              Home
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-purple-500 transition-all hover:text-purple-900 dark:text-purple-500 dark:hover:text-purple-700"
              href="/my_service"
            >
              <BriefcaseIcon className="h-4 w-4" />
              Services
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-purple-500 transition-all hover:text-purple-900 dark:text-purple-500 dark:hover:text-purple-700"
              href="/contact"
            >
              <MailIcon className="h-4 w-4" />
              Contact
            </Link>
          </nav>

          <div className="mt-5 c_pc:absolute c_pc:bottom-0 c_pc:mb-10 c_pc:ml-5  c_mobile:hidden">
            <ToggleTheme />
          </div>
        </div>
      </div>
    </div>
  );
}
