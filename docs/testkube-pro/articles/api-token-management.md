# API Token Management

Sometimes you need machine-to-machine authorization to run tests in CI pipelines or call particular actions from your services. 
Testkube offers API Tokens to resolve this issue. API Tokens have very similar roles like members. 

API Tokens are created under the Organisation Settings [API Tokens tab](/testkube-pro/articles/organization-management#api-tokens)

Each token has a role and an expiration date
- Role specifies the scope (see below)
- Expiration date can be set fora  given time period or as "No expiration" (not recommended for production environments).

If token is not needed anymore you can delete it from the tokens list. 

## API Token Roles

API Tokens can have 2 roles: 

### "admin" Tokens

Admin tokens have access to all Environments in the organisation.

![Admin Role](../../img/admin-roles.png)

### "member" Tokens

Member tokens have limited access to environments and environment actions - see below.

![Member Role](../../img/member-role.png)

For the member organization role, you should choose which environments you want to add to the 
created API Token, and which permission the token should have in each chosen environment.

The following permissions are available:
* `Read` - Read only, you can only call get and list endpoints which do not mutate data in any way.
* `Run` - Access to Read and Run but no changes to the environment.
* `Write` - You can change environments and run tests.

![Environment Role](../../img/environment-role.png)


