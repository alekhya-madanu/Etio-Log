import React, { InputHTMLAttributes, ReactNode, useEffect, useMemo, useState } from "react";
interface PagedFormProps extends InputHTMLAttributes<HTMLFormElement> {
    title?: string
}

const PagedForm: React.FC<PagedFormProps> = ({
    children,
    title,
    ...props
}) => {

    const [page, setPage] = useState(0);
    const nextPage = () => setPage(page + 1);
    return (
      <> 
        <form {...props}>
          {React.Children.map(children, (child,i) => {
            if(i===page){
              return <div className="contents">{child}</div>
            }
            else{

              return <div className="hidden">{child}</div>
            }
          })}
          {page < React.Children.count(children) -1 ? <button className="inline my-1" onClick={nextPage}>Next</button>
          :<button type="submit" className="primary mx-auto w-48 h-12">Submit </button>
          }
        </form>
      </>
    );
}

export default PagedForm;