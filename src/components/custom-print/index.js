import React, { useRef } from 'react';
import './styles.css'

function CustomPrint() {
  const printDomRef = useRef(null);

  const onPrint = () => {
    let printView = printDomRef.current
    console.log(printView)
    // let printView = document.getElementById('print-root')
    const originalPage = document.body.innerHTML;

    let hideDom = printView.querySelectorAll('.no-print')

    if (hideDom) {
      hideDom.forEach(item => {
        console.log(item.style)
        item.style.display = 'none'
      })
    }

    // document.body.appendChild(printView) //将待打印元素追加到body中

    document.body.innerHTML = printView.innerHTML
    window.print() //调用浏览器的打印预览

    document.body.innerHTML = originalPage;

    window.location.reload()

    // document.body.removeChild(printView) //将待打印元素从body中移除
  }

  return (
    <div>
      <button onClick={onPrint}>打印</button>
      <div id="print-root">
        <div ref={printDomRef}>
          要打印内容
          <div className="no-print" >
            这是不要打印的内容
          </div>

          <div>
            sss
            <div>
              aaa
              <div className="no-print" >这是不要打印的内容</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomPrint
