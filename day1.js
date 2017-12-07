// part1

f=i=>[...i].reduce(([l,a],r)=>[r,a+(l==r?+l:0)],[+i[i.length-1],0])[1]

// part2

p = i => {
  j = i + i.slice(0, i.length/2)
  a = 0
  for(var k=0; k<i.length; k++) {
    s = [...j].slice(k, k+1+i.length/2)
    a += s[s.length - 1] == i[k] ? +i[k] : 0;
  }
  return a;
}
