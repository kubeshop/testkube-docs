# API Token Management

Sometimes you need machine-to-machine authorization to run tests in CI pipelines or  call particular actions from your services. 
Testkube offers API Tokens to resolve this issue. API Tokens have very similar roles like members. 

Each token can have also expiration date, you can set it for given time period or as "No expiration" (not recommended for production environments).
If token is not needed anymore you can delete it from the tokens list. 

API Tokens can have 2 roles: 

#### "admin" - access to all environments

![Admin Role](../../img/admin-roles.png)

#### "member" - limited access to environments or limited access for environment actions 

![Member Role](../../img/member-role.png)

For the member organization role, you should choose which environments you want to add to the created API Token, additionally, role should be chosen for each 
environment: 

![Environment Role](../../img/environment-role.png)

We have 3 available roles for environment access: 
* `Read` - Read only, you can only call get and list endpoints which do not mutate data in any way.
* `Run` - Access to Read and Run but no changes to the environment.
* `Write` - You can change environments and run tests. 
