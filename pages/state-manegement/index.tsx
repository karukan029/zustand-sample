import type { NextPage } from "next"
import shallow from "zustand/shallow"
import { useCountStore } from "../../libs/zostand/store"

const Count = () => {
  /**
   * storeの値を全て取得
   * storeの状態が変化するたびに再レンダリングされる
   */
  // const counts = useCountStore()
  /**
   * Stateの変更を検知して再レンダリング
   */
  // const count = useCountStore((state) => state.count)
  // const count2 = useCountStore((state) => state.count2)
  /**
   * shallow：
   * stateの比較が浅い比較（第一階層のみ）になる
   * countかcount2の値が変更されたら、再レンダリングされる
   * 再レンダリングさせる場合の条件をより具体的に指定できる
   * shallowなしだと、count3の値が変更された場合に再レンダリングされる
   */
  const { count, count2 } = useCountStore(
    (state) => ({ count: state.count, count2: state.count2 }),
    shallow
  )
  console.log("Render Count")

  return (
    <>
      <h2>count:{count}</h2>
      <h2>count2:{count2}</h2>
      {/* <h2>count:{counts.count}</h2>
      <h2>count2:{counts.count2}</h2> */}
    </>
  )
}

const Count3 = () => {
  const count3 = useCountStore((state) => state.count3)
  console.log("Render Count3")

  return (
    <h2>count3:{count3}</h2>
  )
}

const IncrementCount = () => {
  // countの値が変更されるたびに再レンダリングされる
  // const { increaseCount } = useCountStore()
  // 特定のstateのみ指定して、監視するstateを指定する
  const increaseCount = useCountStore((state) => state.increaseCount)
  console.log("Increment")
  return (
    <>
      <button onClick={() => increaseCount()}>Increase</button>
    </>
  )
}

const IncrementCount3 = () => {
  const increaseCount = useCountStore((state) => state.increaseCount3)
  console.log("Increment")
  return (
    <>
      <button onClick={() => increaseCount()}>Increase3</button>
    </>
  )
}

const ResetButton = () => {
  const resetCounts = useCountStore((state) => state.resetCounts)
  console.log("Reset")
  return (
    <>
      <button onClick={() => resetCounts()}>Reset</button>
    </>
  )
}

const StateManegement: NextPage = () => {
  return (
    <div>
      <Count />
      <Count3 />
      <IncrementCount />
      <IncrementCount3 />
      <ResetButton />
    </div>
  )
}

export default StateManegement