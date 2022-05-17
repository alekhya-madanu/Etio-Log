import React, { InputHTMLAttributes, ReactNode, useEffect, useState } from "react";

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
    const [activePage, setActivePage]: ReactNode = <></>;

    useEffect(() => {
      activePage = React.Children.only(React.Children.map(children, (child, i) =>
           <>{i === page ? child: null}</>
      ))
    })

    return (
      <>
        <form {...props}>
          {activePage}
          <button className="inline my-1" onClick={nextPage}>Next</button>
        </form>
      </>
    );
}

export default PagedForm;