f=i=>i.split('\n').map(a=>Math.max(...a.split(' '))-Math.min(...a.split(' '))).reduce((a,b)=>a+b)

// f(input)
