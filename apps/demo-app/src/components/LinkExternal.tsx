import classnames from 'classnames';

interface ILinkExternal {
  children: string | React.ReactNode;
  href: string;
  classNames?: string;
}

export const LinkExternal = ({
  children,
  href,
  classNames,
}: ILinkExternal) => {
  const styleLink = classnames('text-neutral-600 hover:text-neutral-800 dark:text-white', classNames);

  return (
    <a className={styleLink} target="_blank" href={href} rel="noreferrer">
      {children}
    </a>
  );
};

export default LinkExternal;
