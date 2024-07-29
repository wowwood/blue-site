function statusFetch() {
    const remote = "";
    console.log(remote)
getJSON(remote, function(data){});
const decoded = JSON.parse(data);

console.log(decoded.status)
}

function statusFetch() {
    const remote = "https://hc.ztn.sh/badge/24488b14-0c61-475a-af8e-91ad0c/5OosQh4F.json";
    fetch(remote).then(remote=>{
        if (!t.ok)
            throw new Error("Network response was not ok");
        return remote.json()
    }
    ).then(){
        throw new Error("working")
    }
    }
