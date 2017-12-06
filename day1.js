f=i=>[...i].reduce(([l,a],r)=>[r,a+(l==r?+l:0)],[+i[i.length-1],0])[1]

// f(input)
