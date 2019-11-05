#!/usr/bin/env ts-node

const { jtree } = require("jtree")
const { AbstractBuilder } = require("jtree/products/AbstractBuilder.node.js")
const { Disk } = require("jtree/products/Disk.node.js")

class Builder extends AbstractBuilder {
  private _getTypesPath() {
    return __dirname + "/products/treeNotationTypes.ts"
  }

  produceSynth(outputFileName: string) {
    return this._produceProductFromInstructionsTree(
      new jtree.TreeNode(`browserProduct
 outputFileName SynthApp.browser.js
 files synth/SynthApp.ts`).nodeAt(0)
    )
  }

  _getOutputFilePath(outputFileName: string) {
    // todo: fix
    return __dirname + "/synth/" + outputFileName
  }

  private _produceProductFromInstructionsTree(productNode: any) {
    // todo: remove! this is copied from abstractbuilder
    const outputFileName = productNode.get("outputFileName")
    const inputFiles = productNode
      .getNode("files")
      .getWordsFrom(1)
      .map((path: string) => __dirname + "/" + path)
    const firstLine = productNode.get("firstLine") ? productNode.get("firstLine") + "\n" : ""
    const lastLine = productNode.get("lastLine") ? productNode.get("lastLine") : ""
    const removeAll = productNode.getNodesByGlobPath("removeAll")
    const transformFn = (code: string) => {
      removeAll.forEach((node: any) => {
        code = jtree.Utils.removeAll(code, node.getContent())
      })
      return firstLine + code + "\n" + lastLine
    }
    console.log(productNode.getLine())
    if (productNode.getLine() === "browserProduct") this._produceBrowserProductFromTypeScript(inputFiles, outputFileName, transformFn)
    else this._produceNodeProductFromTypeScript(inputFiles, outputFileName, transformFn)
  }
}

export { Builder }

if (!module.parent) new Builder().main(process.argv[2], process.argv[3], process.argv[4])
