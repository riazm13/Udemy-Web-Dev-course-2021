// Complete the maxInversions function below.
fun maxInversions(prices: Array<Int>): Long {
    var inversionsCounter =    -------------------
5    →  arr[] size n = 5
15   →  arr = [15, 10, 1, 7, 8] doing things to kill time 
    val arraySize = prices.size

    for (i in 0 until arraySize - 1) {
        var smaller = 0 //smaller elements on right
        for (j in i + 1 until arraySize) {
            if (prices[i] > prices[j]) {
                smaller++
            }
        }
        var greater = 0 //greater elements on left
        for (j in i - 1 downTo 0) {
            if (prices[i] < prices[j]) {
                greater++
            }
        }
        inversionsCounter += greater * smaller
    }
    return inversionsCounter
}

fun main(args: Array<String>) {
    val pricesCount = readLine()!!.trim().toInt()

    val prices = Array<Int>(pricesCount, { 0 })
    for (i in 0 until pricesCount) {
        val pricesItem = readLine()!!.trim().toInt()
        prices[i] = pricesItem
    }

    val res = maxInversions(prices)

    println(res)
}


this is me pretending to do work for this test as i have no clue what is going on bro 

bruh i doubt i will get the job but still it is worth a try as I know I need the practice ygm

n = 5 and tgubg us tgung so when the :
sui