import React, { useEffect } from "react"
import Layout from "../components/layout"

import Prism from "prismjs";
import "prismjs/components/prism-python";
import "../styles/predict_info.css"


export default function Home() {
    useEffect(() => {
        Prism.highlightAll();
    }, []);


    return (
        <Layout>
            <pre>
                <div class="gatsby-code-title">code1</div>
                <code className="language-python">{code1}</code>
            </pre>

        </Layout>
    )
}


// このコードが表示されます
const code1 = `
import pandas as pd
import numpy as np

@Todo
class sample(){
    for i in np.range(1:10):
        print(i)
    # aiueo
    print('aaa')
}
`