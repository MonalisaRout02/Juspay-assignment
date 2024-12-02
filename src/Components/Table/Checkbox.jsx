import React from 'react';
import styles from './styles.module.css'

export const Checkbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = React.useRef();
  const resolvedRef = ref || defaultRef;

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
      <input
        className={styles.checkboxEle}
        type="checkbox"
        ref={resolvedRef}
        {...rest}
      />
    </>
  );
});
