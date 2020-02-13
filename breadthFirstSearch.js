class Town {
    constructor(graph){
        this.graph = graph;
        this.root = 0;
        this.current = 0;
        this.connectionList = [];
        this.neighbourList = [];
        this.workList = [];
        this.distances = {};
         //Let's initialize all distances to infinity 
         for(let i = 0; i < this.graph.length; i++){
            this.distances[i] = Infinity;
        }
       
    }

    //This gives us list of neighbours in (case of 10 it would be [8, 9])
    getNeighbourList(root){
        this.neighbourList = [];
        //connectionList from graph (something like [1, 0, 1, 0....])
        this.connectionList = this.graph[root];
        //Next using connectionsList we can have list of neighbours
        let idx = this.connectionList.indexOf(1);
        //If new instances of 1's are not found indexOf returns -1
        while(idx > -1){
            //neighbour to neighbourlist
            this.neighbourList.push(idx);
            //let's get next neighbours number
            idx = this.connectionList.indexOf(1, idx + 1);
        }
    }

    calculateDistances(root) {

        //Root is starting point where all distances all calculated from
        this.root = root;

         //To root, distance is zero
         this.distances[root] = 0;
       
        //In the beginning in worklist is only root
        this.workList.push(root);

        //We do search until worklist is empty
        while (this.workList.length > 0) {
            if(this.workList.length > 8){
                console.log(this.workList);
                break;
            }
             //shift returns zeroeth object from list and removes it
            this.current = this.workList.shift();
            //Let's find out who are current's neighbours
            this.getNeighbourList(this.current);
           
            //Let's go through neighbourglist
            for (let j = 0; j < this.neighbourList.length; j++) {
                //if neighbourgs distance is Infinity, it needs to be updated
                if(this.distances[this.neighbourList[j]] == Infinity){
                    this.distances[this.neighbourList[j]] = this.distances[this.current] + 1;
                    //Let's put neighbour to worklist so we can process it later
                    this.workList.push(this.neighbourList[j]);
                }

            }

        }
        return this.distances;

    }

}


let townGraph = [
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],//0
    [1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],//1
    [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],//2
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],//3
    [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],//4
    [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],//5
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],//6
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],//7
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],//8
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],//9
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],//10
  ];

  let byron = new Town(townGraph);
  console.log(byron.calculateDistances(10));