import Header from "./Header"
import Sider from "./Sider"

// @ts-ignore
export default function layout({ children }) {
  return (
    <>
      <header className="w-full">
        <Header />
      </header>
      <main className="min-h-[98vh] flex flex-row h-full gradient-bg text-gray-800 dark:text-slate-200">
        {/* TODO: BreadCrumbs? */}
        <Sider />
        <section className="md:flex-grow  max-w-screen-lg mx-auto p-4">
          {children}
        </section>
      </main>
      {/* TODO: Full footer */}
      <footer className="bg-gray-50 text-gray-800 text-center font-thin text-light-900 text-xs">
        Etio Log © {new Date().getFullYear()}
      </footer>
    </>
  );
}