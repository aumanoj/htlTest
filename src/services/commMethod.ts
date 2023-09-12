export  default function debounce <T extends (...args: any[]) => void> (fn: T, wait: number) {
    let timer: NodeJS.Timeout | null;
    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
      if (timer) {
        clearTimeout(timer); // Clear any pre-existing timer
      }
      const context = this; // Get the current context
      timer = setTimeout(() => {
        fn.apply(context, args); // Call the function if the time expires
      }, wait);
    };
  }