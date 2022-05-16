import Link from 'next/link';

export default function Sider() {
    return <div className="w-64 m-4 h-full" aria-label="Sidebar">
         <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
            <ul className="space-y-2" key="sub1">
              <Link href="/AddQuestion" passHref>
                <li key="1" className="sidebar-item">
                  <a>Add Question</a>
                </li>
              </Link>
              <li key="2">option2</li>
              <li key="3">option3</li>
              <li key="4">option4</li>
            </ul>
        </div>
      </div>
}