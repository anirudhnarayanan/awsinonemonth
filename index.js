function createButton(context, func) {
      var div = document.getElementById('plantable');
      var  topics = ["Resources","Elastic Cloud Compute (EC2)","Elastic Load Balancer (ELB)","Auto Scaling Groups",
      "Storage - EBS, EFS and S3","Athena","Identity Access Management","Relational Databases- Aurora and RDS",
      "ElastiCache","Route 53","WhitePaper Reading - Well Architected Framework","Using AWS CLI","AWS Storage Gateway and Snowball",
      "Serverless","SQS,SNS,ActiveMQ","Kinesis","Cloudfront and Global Accelerator","Other Databases",
      "Cloudwatch and CloudTrail","Virtual Private Cloud","Whitepaper Reading Security Best Practices",
      "Whitepaper Reading -Architecting for the Cloud Best Practices","Cloudformation and Elastic Beanstalk",
      "AWS Encryption","ECS and Fargate","Step Functions and SWF","Elastic Transcoders","AWS Glue","OpsWorks","WorkSpaces","EMR","AppSync"];

      var topicinfo = [
        

      ];

      let i=0;
      for(i=0;i<topics.length;i+=4){
        let html = '<tr>';
        var end;
        if(topics.length > i+4){
          end = i+4;
        }
        else{
          end = topics.length;
        }
        topics.slice(i,end).forEach(function(item,index){
          html +='<td style="width:30px;height:30px;"><button class="button" id="'+ index.toString() +'" data-toggle="modal" data-target="#myModal" style="vertical-align:middle"><span>'+ item +'</span></button></td>';
        })
        html +='</tr>';
        div.innerHTML += html;
      }
      
      
      
      // context.appendChild(button);
}

window.onload = function() {
    createButton(document.body, function() {
        highlight(this.parentNode.childNodes[1]);
        // Example of different context, copied function etc
        // createButton(this.parentNode, this.onclick);
    });
    $('.button').on('click', function(e) {  
        var getIdFromRow = this.id;
        // $("#buyghc").val(getIdFromRow);
        alert(getIdFromRow);
    });
    
};