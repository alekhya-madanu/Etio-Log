import Link from 'next/link';

export default function Sider() {
    return (
      <aside className="hidden lg:contents md:h-full" aria-label="Sidebar">
        <div className="m-4 w-64 shadow-md p-4 bg-gray-50 dark:bg-gray-800 bg-opacity-90 rounded-md">
          <ul className="space-y-2" key="sub1">
            <Link href="/Metrics" passHref>
              <li key="1" className="sidebar-item px-4 py-8">
                <a>Metrics</a>
              </li>
            </Link>
            <Link href="/AddQuestion" passHref>
              <li key="1" className="sidebar-item px-4 py-8">
                <a>Add New Question</a>
              </li>
            </Link>
            <Link href="/AddQuestion" passHref>
              <li key="1" className="sidebar-item px-4 py-8">
                <a>Something Else</a>
              </li>
            </Link>
            <Link href="/AddQuestion" passHref>
              <li key="1" className="sidebar-item px-4 py-8">
                <a>Another thing</a>
              </li>
            </Link>
          </ul>
        </div>
      </aside>
    );
}