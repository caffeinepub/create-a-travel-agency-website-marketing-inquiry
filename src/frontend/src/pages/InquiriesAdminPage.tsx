import { useInquiries } from '@/hooks/useInquiries';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, Mail, Phone, Calendar, Users, DollarSign } from 'lucide-react';

export default function InquiriesAdminPage() {
  const { data: inquiries, isLoading, isError } = useInquiries();

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1000000);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="py-12">
      <div className="container">
        <div className="mb-8">
          <h1 className="font-display text-4xl font-bold mb-2">Inquiries Dashboard</h1>
          <p className="text-muted-foreground">
            View and manage customer travel inquiries
          </p>
        </div>

        {isError && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Failed to load inquiries. Please try refreshing the page.
            </AlertDescription>
          </Alert>
        )}

        {isLoading ? (
          <Card>
            <CardHeader>
              <Skeleton className="h-8 w-48" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="h-16 w-full" />
                ))}
              </div>
            </CardContent>
          </Card>
        ) : inquiries && inquiries.length > 0 ? (
          <div className="space-y-6">
            {/* Summary Cards */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-none shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Inquiries</p>
                      <p className="text-3xl font-bold text-primary">{inquiries.length}</p>
                    </div>
                    <Mail className="h-8 w-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">This Week</p>
                      <p className="text-3xl font-bold text-accent">
                        {inquiries.filter(inq => {
                          const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
                          return Number(inq.timestamp) / 1000000 > weekAgo;
                        }).length}
                      </p>
                    </div>
                    <Calendar className="h-8 w-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Avg. Travelers</p>
                      <p className="text-3xl font-bold">
                        {(inquiries.reduce((sum, inq) => sum + Number(inq.numTravelers), 0) / inquiries.length).toFixed(1)}
                      </p>
                    </div>
                    <Users className="h-8 w-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Inquiries Table */}
            <Card className="border-none shadow-soft">
              <CardHeader>
                <CardTitle>Recent Inquiries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Interest</TableHead>
                        <TableHead>Travelers</TableHead>
                        <TableHead>Budget</TableHead>
                        <TableHead>Message</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {inquiries.map((inquiry) => (
                        <TableRow key={inquiry.id.toString()}>
                          <TableCell className="whitespace-nowrap text-sm">
                            {formatDate(inquiry.timestamp)}
                          </TableCell>
                          <TableCell className="font-medium">{inquiry.fullName}</TableCell>
                          <TableCell>
                            <div className="space-y-1 text-sm">
                              <div className="flex items-center gap-1">
                                <Mail className="h-3 w-3 text-muted-foreground" />
                                <span className="text-muted-foreground">{inquiry.email}</span>
                              </div>
                              {inquiry.phone && (
                                <div className="flex items-center gap-1">
                                  <Phone className="h-3 w-3 text-muted-foreground" />
                                  <span className="text-muted-foreground">{inquiry.phone}</span>
                                </div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="secondary">{inquiry.destination}</Badge>
                            {inquiry.travelDates && (
                              <p className="text-xs text-muted-foreground mt-1">
                                {inquiry.travelDates}
                              </p>
                            )}
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">
                              <Users className="h-3 w-3 mr-1" />
                              {inquiry.numTravelers.toString()}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {inquiry.budgetRange ? (
                              <Badge variant="outline">
                                <DollarSign className="h-3 w-3 mr-1" />
                                {inquiry.budgetRange}
                              </Badge>
                            ) : (
                              <span className="text-sm text-muted-foreground">Not specified</span>
                            )}
                          </TableCell>
                          <TableCell className="max-w-xs">
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {inquiry.message}
                            </p>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <Card className="border-none shadow-soft">
            <CardContent className="py-12 text-center">
              <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">No inquiries yet</h3>
              <p className="text-muted-foreground">
                Customer inquiries will appear here once they start coming in.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
