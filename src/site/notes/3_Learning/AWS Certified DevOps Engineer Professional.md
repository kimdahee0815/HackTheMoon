---
{"dg-note-icon":"developing","dg-permalink":"3_Learning/AWS-Certified-DevOps-Engineer-Professional","created-date":"2025-01-17 2:10:14 pm","date":"2025-01-17","type":"developing","tags":["developing"],"aliases":null,"title":"AWS Certified DevOps Engineer Professional","courseName":"AWS Certified DevOps Engineer Professional 2025 - DOP-C02","dg-publish":true,"permalink":"/3_Learning/AWS-Certified-DevOps-Engineer-Professional/","dgPassFrontmatter":true,"noteIcon":"developing"}
---


# [[3_Learning/AWS Certified DevOps Engineer Professional\|AWS Certified DevOps Engineer Professional]]

## CICD
![Utilities/Images/Pasted image 20250117142114.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250117142114.jpeg)
- Push our code to target repository and deploy automatically
- Make sure it's tested before being deployed
- With possibility to go into different stages (dev, test, staging, prod)
- With manual approval where needed
## CI (Continuous Integration)
- Developers push the code to central code repository 
	- ex. Github, CodeCommit, BitBucket..
- A testing/build server checks the code as soon as it's pushed
	- ex. CodeBuild, Jenkins CI ...
- Developer gets feedback about tests and checks that have passed / failed
- Find bugs early and fix bugs early
- Deliver faster as the code is tested
- Deploy often
- Developers are not blocked
## CD (Continous Delivery)
- Ensures the software can be released reliably whenever needed
- Ensures deployments happen often and are quick
- Shift away from 'one release every 3 months' to '5 releases a day'!
- That usually means automated deployment
	- ex. CodeDeploy, Jenkins CD, Spinnaker ...
### CodeCommit
- Store our code
- Version Control
	- Ability to understand the various changes that happened to the code over time (and possibly roll back)
	- Enabled by using version control ssytem such as Git
		- Git can be synchronized on your computer, but it usually is uploaded on a central online repository
- Benefits
	- Collaborate with other developers
	- Make sure the code is backed up somewhere
	- Make sure it's fully viewable and auditable
- CodeCommit vs Github/GitLab/BitBucket
	- ![Utilities/Images/Pasted image 20250117143041.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250117143041.jpeg)
	- Git repo can be expensive
	- CodeCommit (From 2024.7.25 - <font color="#ff0000">discontinued</font> => recommended to migrate to external Git solution)
		- Private Git repositories
		- No size limit on repositories (scale seamlessly)
		- Fully managed, highly available
		- Code only in AWS Cloud account => increased security and compliance
		- <font color="#ff0000">Security</font> (encrypted, access control ... )
			- Interactions are done using Git
			- <font color="#ff0000">Authentication</font>
				- SSH Keys - AWS users can configure SSH keys in their IAM Console
				- HTTPS - with AWS CLI Credential helper / Git Credentials for IAM user
			- <font color="#ff0000">Authorization</font>
				- IAM policies to manage users/roles permissions to repositories
			- <font color="#ff0000">Encryption</font>
				- Automatically encrypted at rest using AWS KMS
				- Encrypted in transit (can only use HTTPS or SSH - both secure)
			- <font color="#ff0000">Cross-account Access</font>
				- Do not share your SSH keys or your AWS credentials
				- Use IAM role in your AWS account and use AWS STS (<font color="#ff0000">AssumeRole</font> API)
		- Integrated with Jenkins, AWS CodeBuild, and other CI tools
- Monitoring with EventBridge
	- In near real-time you can monitor CodeCommit events in EventBridge
		- ex. pullRequestCreated, pullRequestStatusChanged, referenceCreated, commentOnCommitCreated ...
		- ![Utilities/Images/Pasted image 20250117143547.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250117143547.jpeg)
- How to migrate Git repository to CodeCommit
	- You can migrate a project hosted on another Git repository to CodeCommit repository
	- ![Utilities/Images/Pasted image 20250117143711.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250117143711.jpeg)
- Cross-Region Replication
	- ex. achieve lower latency pulls for global developers, backups ...
	- ![Utilities/Images/Pasted image 20250117143906.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250117143906.jpeg)
- Branch Security
	- By default, a user who has push permissions to a CodeCommit repository can contribute to any branch
	- To restrict to which branch they can contribute to, you need to use <font color="#ff0000">IAM policies </font>for restricting users to push or merge code
		- ex. only senior developers can push to production branch
		- ![Utilities/Images/Pasted image 20250117144150.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250117144150.jpeg)
		- ![Utilities/Images/Pasted image 20250117144139.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250117144139.jpeg)
	- <font color="#ff0000">Resource Policies are not supported yet</font>
- Pull request Approval Rules
	- Helps ensure the quality of your code by requiring users to approve the open PRs before the code can be merged
	- You need to specify <font color="#ff0000">a pool of users to approve</font> and <font color="#ff0000">number of users who must approve the PR</font>
	- ![Utilities/Images/Pasted image 20250117144422.jpeg|200](/img/user/Utilities/Images/Pasted%20image%2020250117144422.jpeg)
	- Specify IAM Principal ARN (IAM users, federated users, IAM Roles, IAM Groups)
	- <font color="#ff0000">Approval Rule Templates</font>
		- <font color="#ff0000">Automatically apply Approval Rules to PRs in specific repositories</font>
		- ex. define different rules for dev and prod branches
### CodePipeline
- Automating our pipeline from code to Elastic Beanstalk
- Visual workflow to orchestrate your CICD
- Source - CodeCommit, ECR, S3, BitBucket, Github
- Build - CodeBuild, Jenkins, CloudBees, TeamCity
- Test - CodeBuild, AWS Device Farm, 3rd party tools ...
- Deploy - CodeDeploy, Elastic Beanstalk, CloudFormation, ECS, S3 ...
- Invoke - Lambda, Step Functions
- Build Stages
	- Each stage can have sequential actions and/or parallel actions
	- ex. Build => Test => Deploy => Load Testing (to make sure staging is doing fine) => deploy again...
	- Manual approval can be defined at any stage
- How does it work?
	- Each pipeline stage can create <font color="#ff0000">artifacts</font> (Whatever created out of the pipeline)
	- Artifacts stored in an S3 bucket and pased on to the next stage
	- ![Utilities/Images/Pasted image 20250117145202.jpeg](/img/user/Utilities/Images/Pasted%20image%2020250117145202.jpeg)
- TroubleShooting
	- For CodePipeline Pipeline/Action/Stage Executio State Changes
	- <font color="#ff0000">Use CloudWatch Events (Amazon EventBridge)!</font>
		- ex. create events for failed pipelines
		- ex. create events for cancelled pipelines
	- If CodePipeline fails a stage, your pipeline stops, and you can get information in the console
	- If pipeline can't perform an aciton, make sure the 'IAM Service Role' attached does have enough IAM permissions (IAM Policy)!
	- AWS CloudTrail can be used to audit AWS API calls
	- 
### CodeBuild
- Building and Testing our code
### CodeDeploy
- Deploy the code to EC2 instances (not Elastic Beanstalk)
### CodeStar
- Manage software development activities in one place
### CodeArtifact
- store, publish, and share software packages
### CodeGuru
- Automated code reviews using Machine Learning





















### Developing References
##### Developing Report
[[3_Learning/Report/Developing/2025-01-17 - AWS Certified DevOps Engineer Professional\|2025-01-17 - AWS Certified DevOps Engineer Professional Report]]
[[3_Learning/Report/Developing/Daily/2025-01-17 - Developing\|2025-01-17 - Developing Daily Report]]
[[3_Learning/Report/Developing/Weekly/2025-01-3th - Developing\|2025-01-3th - Developing Weekly Report]]





