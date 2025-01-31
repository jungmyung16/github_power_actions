async function makeIssue() {
    const token = process.env.GH_TOKEN;
    const OWNER = "jungmyung16"; // GitHub 계정이름 
    const REPO = "github_power_actions";    // 현 리포지터리 이름
    const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/issues`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            title : "내일 행운의 숫자는?",
            body : `${Math.floor(Math.random() * 100) + 1}`,
        })
    });
    if(response.ok) {
        console.log("Success");
    } else {
        console.log("Failed");
    }
}
makeIssue();
