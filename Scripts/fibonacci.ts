function fibonacci(n : number) : number {
    let fibo1 = 0;
    let fibo2 = 1;

    while (n > 1) {
        let fiboTemp = fibo1 + fibo2;
        fibo1 = fibo2;
        fibo2 = fiboTemp;
        n--; 
    }

    return fibo2;
}