import React, {
  InputHTMLAttributes,
  ReactNode,
  useMemo,
  useState,
} from "react";

interface PagedFormProps extends InputHTMLAttributes<HTMLFormElement> {
  title?: string;
  pages: Array<ReactNode>
}

/*
 React component which accepts number of pages and renders a progress bar
 Accepts an active page number
 Each page is a number in a rounded box
 Active page is highlighted in a different color
*/
const PageNumbers: React.FC<PageNumberProps> = ({ pages, activePage, setActivePage }) => {
  const pageIndicators = useMemo(() => {
    const pageIndicators = [];
    for (let i = 0; i < pages; i++) {
      pageIndicators.push(
        <button onClick={() => setActivePage(i)} type="button"
          key={i}
          className={`mx-2 h-8 w-8 rounded-md relative
          ${i === activePage ? "inactive-container" : "active-container"}`}
        >
          <div className="absolute top-1/2 -translate-y-1/2 text-center w-full text-md">
            {i + 1}
          </div>
        </button>
      );
    }
    return pageIndicators;
  }, [pages, activePage, setActivePage]);
  return (
    <div className="mt-6 mb-4 flex flex-row justify-center">{pageIndicators}</div>
  );
};

const PagedForm: React.FC<PagedFormProps> = ({ pages, title, ...props }) => {
  const [page, setPage] = useState(0);
  const nextPage = () => setPage(page + 1);
  return (
    <>
      <form {...props}>
        <div className="px-10 mt-4 flex flex-col h-full">
          <PageNumbers pages={pages.length} activePage={page} setActivePage={setPage} />
          <div className="my-1 standard-border"></div>
          <div className="flex-grow py-2">
            { pages.map((p, i) => {
              if (i === page) {
                return p;
              } else {
                return null;
              }
            })}
          </div>
          <div className="w-full standard-border"></div>
          <div className="py-4 w-full mx-auto">
            {page < pages.length - 1 ? (
              <input type="button" value="Next" onClick={nextPage} className="block mx-auto w-48 h-12 bg-slate-600 border rounded-md" />
              // <button type="button"
              //   className="mx-auto inline my-1 w-80 h-12"
              //   onClick={nextPage}
              // >
              //   Next →
              // </button>
            ) : (
              <button type="submit" className="primary block mx-auto w-48 h-12"
              onClick={() => console.log("submit")}
              >
                Submit{" "}
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

type PageNumberProps = {
  pages: number;
  activePage: number;
  setActivePage: (page: number) => void;
};

export default PagedForm;
