import React, {
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
interface PagedFormProps extends InputHTMLAttributes<HTMLFormElement> {
  title?: string;
}

/*
 React component which accepts number of pages and renders a progress bar
 Accepts an active page number
 Each page is a number in a rounded box
 Active page is highlighted in a different color
*/
const Progress: React.FC<ProgressProps> = ({ pages, activePage }) => {
  const pageIndicators = useMemo(() => {
    const pageIndicators = [];
    for (let i = 0; i < pages; i++) {
      pageIndicators.push(
        <div
          key={i}
          className={`mx-2 h-8 w-8 rounded-md relative
          ${i === activePage ? "inactive-container" : "active-container"}`}
        >
          <div className="absolute top-1/2 -translate-y-1/2 text-center w-full text-md">
            {i + 1}
          </div>
        </div>
      );
    }
    return pageIndicators;
  }, [pages, activePage]);
  return (
    <div className="py-12 flex flex-row justify-center">{pageIndicators}</div>
  );
};

const PagedForm: React.FC<PagedFormProps> = ({ children, title, ...props }) => {
  const [page, setPage] = useState(0);
  const nextPage = () => setPage(page + 1);
  return (
    <>
      <form {...props}>
        <div className="p-10 mt-4 flex flex-col h-full">
          <Progress pages={React.Children.count(children)} activePage={page} />
          <div className="my-1 standard-border"></div>
          <div className="flex-grow py-2">
            {React.Children.map(children, (child, i) => {
              if (i === page) {
                return <div className="contents">{child}</div>;
              } else {
                return <div className="hidden">{child}</div>;
              }
            })}
          </div>
          <div className="w-full standard-border"></div>
          <div className="mx-auto w-fit py-4">
            {page < React.Children.count(children) - 1 ? (
              <button
                className="mx-auto inline my-1 w-48 h-12"
                onClick={nextPage}
              >
                Next →
                {/* Replace with font-awesome icons */}
              </button>
            ) : (
              <button type="submit" className="mx-auto primary w-48 h-12">
                Submit{" "}
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

type ProgressProps = {
  pages: number;
  activePage: number;
};

export default PagedForm;
