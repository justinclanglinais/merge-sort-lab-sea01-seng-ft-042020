unsorted = [ 1, 5, 8, 3, 2, 4, 10, 7, 9, 6 ]

function merge(firstHalf, secondHalf){
    let sorted = []
    while(firstHalf.length != 0 && secondHalf.length != 0){
        let currentMin = findMinAndRemove(firstHalf, secondHalf)
        sorted.push(currentMin)
    }
    return sorted.concat(firstHalf).concat(secondHalf)
}

function split(array) {
    let midpoint = array.length/2
    let firstHalf = array.slice(0,midpoint)
    let secondHalf = array.slice(midpoint, array.length)

    if (array.length < 2) {
        return array
    } else {
        return merge(split(firstHalf), split(secondHalf))
    }
}

split(unsorted)