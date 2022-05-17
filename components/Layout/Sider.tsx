import Link from 'next/link';

export default function Sider() {
    return (
      <aside className="hidden md:contents md:h-full" aria-label="Sidebar">
        <div className="m-4 w-64 shadow-md py-2 px-1 bg-gray-50 dark:bg-gray-800 bg-opacity-90">
          <ul className="space-y-2" key="sub1">
            <Link href="/AddQuestion" passHref>
              <li key="1" className="sidebar-item px-4 py-2">
                <a>Add Question</a>
              </li>
            </Link>
            <Link href="/AddQuestion" passHref>
              <li key="1" className="sidebar-item px-4 py-2">
                <a>Something</a>
              </li>
            </Link>
            <Link href="/AddQuestion" passHref>
              <li key="1" className="sidebar-item px-4 py-2">
                <a>Something Else</a>
              </li>
            </Link>
            <Link href="/AddQuestion" passHref>
              <li key="1" className="sidebar-item px-4 py-2">
                <a>Another thing</a>
              </li>
            </Link>
          </ul>
        </div>
      </aside>
    );
}