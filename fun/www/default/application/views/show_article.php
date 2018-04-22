<table align="center" border='1'>
<tr>
<td>No.</td>
<td>Article Name</td>
<td>Article Descrption</td>
<td>Date</td>

</tr>
<?php $i =1; foreach($article as $article_data){ ?>
<tr>
<td><?php echo $i; ?></td>
<td><?php echo $article_data['name']; ?></td>
<td><?php echo $article_data['description']; ?></td>
<td><?php echo $article_data['date']; ?></td>

</tr>
<?php $i++; } ?>

</table>