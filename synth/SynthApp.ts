//onsave jtree build produceSynth

const { AbstractTreeComponent, AbstractCommander, WillowConstants, TreeComponentFrameworkDebuggerComponent, AbstractGithubTriangleComponent } = require("jtree/products/TreeComponentFramework.node.js")
const { jtree } = require("jtree")
const pauNode = require("../pau.nodejs.js")

class SynthCommander extends AbstractCommander {
  constructor(app: SynthApp) {
    super(app)
    this._app = app
  }

  private _app: SynthApp
  synthesizeCommand() {
    const limit = parseInt(document.getElementById("populationSize").value || 1)
    const tree = new jtree.TreeNode()
    for (let count = 1; count <= limit; count++) {
      tree.appendLineAndChildren(
        `person${count}`,
        new pauNode()
          .getGrammarProgram()
          .synthesizeNode()
          .join("\n")
      )
    }

    if (typeof window !== "undefined") (<any>window).tree = tree

    const formatOption = document.getElementById("formatDropdown").value
    document.getElementById("output").value = tree[formatOption]()
  }
}

class SynthApp extends AbstractTreeComponent {
  private _commander = new SynthCommander(this)
  createParser() {
    return new jtree.TreeNode.Parser(undefined, {
      githubTriangleComponent: githubTriangleComponent,
      navBarComponent: navBarComponent,
      headerComponent: headerComponent,
      controlsComponent: controlsComponent,
      outputComponent: outputComponent,
      TreeComponentFrameworkDebuggerComponent: TreeComponentFrameworkDebuggerComponent
    })
  }
  static getDefaultStartState() {
    return `navBarComponent
headerComponent
controlsComponent
outputComponent
githubTriangleComponent`
  }
  toHakonCode() {
    return `body
 font-family Roboto,sans-serif
 font-weight 100
 width 1000px
 margin auto
 padding-top 10px
h1
 font-weight 300`
  }
}

class navBarComponent extends AbstractTreeComponent {
  toHakonCode() {
    return `.logo
 padding-right 10px
 color black
 text-decoration none
 font-weight 500`
  }
  toStumpCode() {
    return `div
 a PAU
  href https://pau.treenotation.org/
  class logo
 span medical records you can copy & paste`
  }
}
class controlsComponent extends AbstractTreeComponent {
  toStumpCode() {
    return `label Population Size
 input
  id populationSize
  type number
  value 1
  min 1
  max 10000000
 label Type
 select
  id typeDropdown
  option Timeline
  option Summary
 label Format
 select
  id formatDropdown
  option TreeNotation
   selected
   value toString
  option CSV
   value toCsv
  option TSV
   value toTsv
  option JSON
   value toJsonSubset
  option XML
   value toXml
 button Synthesize
  ${WillowConstants.DataShadowEvents.onClickCommand} synthesizeCommand`
  }
}
class outputComponent extends AbstractTreeComponent {
  toHakonCode() {
    return `textarea
 border 0
 width 100%
 height 400px
 margin-top 20px
 background #eee`
  }
  toStumpCode() {
    return `textarea
 id output`
  }
}
class headerComponent extends AbstractTreeComponent {
  toStumpCode() {
    return `h1 PauSynth: Synthesize <strong>real</strong> medical records for <strong>fake</strong> people`
  }
}

class githubTriangleComponent extends AbstractGithubTriangleComponent {
  githubLink = `https://github.com/treenotation/pau/tree/master/synth`

  toHakonCode() {
    return `.AbstractGithubTriangleComponent
 display block
 position absolute
 top 0
 right 0`
  }
  toStumpCode() {
    return `a
 class AbstractGithubTriangleComponent
 href ${this.githubLink}
 img
  src github-fork.svg`
  }
}

export { SynthApp }
