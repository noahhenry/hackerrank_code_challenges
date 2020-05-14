import Foundation

class Difference {
    private var elements = [Int]()
    var maximumDifference: Int
    // Write your code here
    init(a: [Int]) {
        elements = a
        maximumDifference = 0
    }
    
    func computeDifference() {
        for (index, element) in elements.enumerated() {
            let base = element
            // print("Base: \(base)")
            
            var j = index + 1
            for _ in j..<elements.count {
                let comparer = elements[j]
                // print("Comparer: \(comparer)")
                
                let diff = abs(base - comparer)
                // print("Diff: \(diff)")
                
                if diff > maximumDifference {
                    maximumDifference = diff
                }
                
                j += 1
            }
        }
    }
    
} // End of Difference class

func main(_ arr: [Int]) {
    let a = arr

    let d = Difference(a: a)

    d.computeDifference()

    print(d.maximumDifference)
}

main([1,2,5])
print("------------------")
main([4,6,12])
print("------------------")
main([8,19,3,2,7])
