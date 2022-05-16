import Header from "./Header"
import Sider from "./Sider"

// @ts-ignore
export default function layout({ children }) {
  return (
    <>
      <header className="w-full">
        <Header />
      </header>
      <main className="flex flex-row h-full bg-gray-100 text-gray-800">
        {/* TODO: BreadCrumbs? */}
        <aside className="min-h-[95vh]">
          {" "}
          <Sider />{" "}
        </aside>
        <section className="flex-grow max-w-screen-lg mx-auto">{children}</section>
      </main>
      {/* TODO: Full footer */}
      <footer className="bg-gray-50 text-gray-800 text-center font-thin text-light-900 text-xs">
        Etio Log © {new Date().getFullYear()}
      </footer>
    </>
  );
}