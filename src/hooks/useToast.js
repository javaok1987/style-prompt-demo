import { useState, useCallback } from 'react';

export const useToast = () => {
    const [toastState, setToastState] = useState({ show: false, message: '' });

    const showToast = useCallback((message, duration = 3000) => {
        setToastState({ show: true, message });
        setTimeout(() => {
            setToastState(prev => ({ ...prev, show: false }));
        }, duration);
    }, []);

    return {
        show: toastState.show,
        message: toastState.message,
        triggerToast: showToast
    };
};
