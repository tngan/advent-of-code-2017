// part 1

f=i=>i.split('\n').map(a=>Math.max(...a.split(' '))-Math.min(...a.split(' '))).reduce((a,b)=>a+b)

// part 2

p=m=>m.map(a=>a.map(b=>a.map((c,i)=>c%b==0?a[i]:null).filter(s=>s!==null).sort((a,b)=>(+a)-(+b))).filter(c=>c.length==2).map(([d,e])=>e/d)).reduce((f,g)=>+f+(+g))
