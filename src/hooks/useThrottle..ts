import { useEffect, useMemo, useState } from 'react';
import { throttle } from 'lodash';

const useThrottle = <T, >(value: T, delay: number): T => {
    const [thrVal, setThrValue] = useState(value);
    const memoThrottle = useMemo(() => throttle(
        setThrValue,
        delay,
    ), [delay]);
    useEffect(() => {
        memoThrottle(value);
    }, [value, memoThrottle]);
    return thrVal;
};

export default useThrottle;
