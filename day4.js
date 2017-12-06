input.split('\n').map(s=>[...new Set(s.split(' '))].length === s.split(' ').length).filter(s=>s).length
