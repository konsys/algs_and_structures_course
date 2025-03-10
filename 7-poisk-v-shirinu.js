// Поиск в ширину в графе

const graph = {
    a: ['b', 'c'],
    b: ['f'],
    c: ['d', 'e'],
    d: ['f'],
    e: ['f'],
    f: ['g'],
    h: []
}
// graph.a = ['b', 'c']
// graph.b = ['f']
// graph.c = ['d', 'e']
// graph.d = ['f']
// graph.e = ['f']
// graph.f = ['g']
// graph.h = ['']


// ['a']
// ['b', 'c']
// ['b', 'd', 'e']
// ['b', 'd', 'f']
// ['b', 'd', 'g']

function breadthSearch(graph, start, end) {
    let queue = [start]

    while (queue.length) {
        let current = queue.shift();
        if (!graph[current]) {
            graph[current] = []
        } else if (graph[current].includes(end)) {
            return true;
        }
        queue = [...graph[current], ...queue]

    }
    return false;
}



console.log(breadthSearch(graph, 'a', 'h'))
console.log(breadthSearch(graph, 'a', 'g'))